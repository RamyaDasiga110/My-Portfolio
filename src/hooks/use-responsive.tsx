import * as React from "react"

// Define breakpoints according to tailwind's default breakpoints
const BREAKPOINTS = {
  sm: 640,  // Small devices (phones)
  md: 768,  // Medium devices (tablets)
  lg: 1024, // Large devices (desktops)
  xl: 1280, // Extra large devices (large desktops)
  '2xl': 1536 // 2X Extra large devices
}

type BreakpointKey = keyof typeof BREAKPOINTS;

export function useResponsive() {
  const [screenSize, setScreenSize] = React.useState<{
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    activeBreakpoint: BreakpointKey | null;
  }>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    activeBreakpoint: null
  })

  React.useEffect(() => {
    // Only run in browser environment to avoid SSR issues
    if (typeof window === 'undefined') return;
    
    const updateScreenSize = () => {
      const width = window.innerWidth
      
      // Determine active breakpoint
      let activeBreakpoint: BreakpointKey | null = null
      
      if (width < BREAKPOINTS.sm) {
        activeBreakpoint = 'sm'
      } else if (width < BREAKPOINTS.md) {
        activeBreakpoint = 'md' 
      } else if (width < BREAKPOINTS.lg) {
        activeBreakpoint = 'lg'
      } else if (width < BREAKPOINTS.xl) {
        activeBreakpoint = 'xl'
      } else {
        activeBreakpoint = '2xl'
      }
      
      // Apply any global tablet-specific CSS adjustments
      try {
        if (width >= BREAKPOINTS.md && width < BREAKPOINTS.lg) {
          document.body.classList.add('tablet-view');
          document.body.classList.remove('mobile-view');
          
          // Safely apply tablet-specific styles
          setTimeout(() => {
            try {
              // Adjust section titles for tablet
              const sectionTitles = document.querySelectorAll('.section-title');
              sectionTitles.forEach(title => {
                (title as HTMLElement).style.fontSize = '1.75rem';
                (title as HTMLElement).style.lineHeight = '2rem';
                (title as HTMLElement).style.marginBottom = '1.5rem';
              });
            } catch (err) {
              console.error('Error applying tablet styles:', err);
            }
          }, 0);
        } else if (width < BREAKPOINTS.md) {
          // Mobile-specific styles
          document.body.classList.add('mobile-view');
          document.body.classList.remove('tablet-view');
          
          setTimeout(() => {
            try {
              // Ensure mobile menu items are properly styled
              const mobileMenuItems = document.querySelectorAll('.mobile-menu a');
              mobileMenuItems.forEach(item => {
                (item as HTMLElement).style.display = 'flex';
                (item as HTMLElement).style.width = '100%';
              });
              
              // Specifically style the CV download button in mobile menu
              const cvDownloadButton = document.querySelector('.download-cv-mobile');
              if (cvDownloadButton) {
                (cvDownloadButton as HTMLElement).style.display = 'flex';
                (cvDownloadButton as HTMLElement).style.width = '100%';
                (cvDownloadButton as HTMLElement).style.fontWeight = 'bold';
                (cvDownloadButton as HTMLElement).style.marginTop = '0.75rem';
                (cvDownloadButton as HTMLElement).style.marginBottom = '0.5rem';
              }
            } catch (err) {
              console.error('Error applying mobile styles:', err);
            }
          }, 0);
        } else {
          document.body.classList.remove('tablet-view');
          document.body.classList.remove('mobile-view');
        }
      } catch (err) {
        console.error('Error in responsive hook:', err);
      }
      
      setScreenSize({
        isMobile: width < BREAKPOINTS.md,
        isTablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
        isDesktop: width >= BREAKPOINTS.lg,
        activeBreakpoint
      })
    }

    // Initial check
    updateScreenSize()
    
    // Add event listener
    window.addEventListener('resize', updateScreenSize)
    
    // Clean up
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  return screenSize
}
