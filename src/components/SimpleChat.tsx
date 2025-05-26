import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, AlertCircle } from 'lucide-react';

// Simple message type
type Message = {
  type: 'user' | 'bot';
  text: string;
  id: string;
  timestamp: Date;
  suggestions?: string[];
  isTyping?: boolean;
};

// Helper function to generate random ID
function generateId() {
  return Math.random().toString(36).substring(2, 15);
}

// Initial welcome message
const initialMessages: Message[] = [
  {
    type: 'bot',
    text: "👋 Hello! I'm Ramya's portfolio assistant. I can provide information about her professional experience at Autodesk, technical skills in C#, ASP.NET, JavaScript and more, education at University of Pisa and projects.\n\nRamya is currently offline, but you can contact her directly through email or phone - just ask me for contact details!",
    id: generateId(),
    timestamp: new Date(),
    suggestions: ['Technical skills', 'Work experience', 'Education', 'Contact Ramya']
  }
];

// Portfolio content data
const portfolioData = {
  skills: {
    frontend: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
    backend: ['C#', 'ASP.NET', 'Node.js', 'Express', 'REST APIs', '.NET Core'],
    database: ['SQL Server', 'MongoDB', 'PostgreSQL', 'Query Optimization', 'Database Design'],
    cloud: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
    tools: ['Git', 'Visual Studio', 'VS Code', 'Jira', 'Agile Methodologies'],
  },
  experience: {
    company: 'Autodesk',
    period: 'May 2021 - Dec 2023',
    role: 'Software Developer',
    achievements: [
      'Developed Pricing Willow Application, reducing operation time by 40%',
      'Engineered SQL queries resulting in 30% faster data retrieval',
      'Implemented automated deployment pipelines, reducing deployment time by 60%',
      'Developed responsive UIs using C# and ASP.NET MVC',
      'Resolved 50+ critical bugs and reduced bug backlog by 45%'
    ]
  },
  freelance: {
    companies: [
      {
        name: 'Mapecontrol',
        description: 'Freelance web development work including website redesign with modern layout and responsive design',
        technologies: ['WordPress', 'Web Design', 'Responsive UI', 'SEO']
      },
      {
        name: 'Esploriamo Italia',
        description: 'Freelance project improving UX for a travel company website',
        technologies: ['WordPress', 'Web Design', 'Responsive UI', 'SEO']
      }
    ]
  },
  education: [
    {
      degree: "Master of Science (M.S) in Data Science and Business Informatics",
      institution: "University of Pisa (UniPi)",
      period: "November 2024 - Present",
      location: "Pisa, Italy"
    },
    {
      degree: "Bachelor of Engineering (B.E) in Information Science and Engineering",
      institution: "Sai Vidya Institute of Technology (VTU)",
      period: "August 2016 - August 2020",
      location: "Bangalore, India"
    }
  ],
  projects: [
    {
      name: 'Real-time Weather Application',
      description: 'A responsive web application providing real-time weather updates with clean user interface',
      technologies: ['NextJS', 'TypeScript', 'Weather API', 'Responsive Design']
    },
    {
      name: 'Data Security Tool',
      description: 'An Encryption/Decryption Tool implementing the SALT algorithm for secure password encryption',
      technologies: ['C#', 'Cryptography', 'SALT Algorithm', 'Security']
    },
    {
      name: 'Portfolio Website',
      description: 'Modern responsive portfolio website with interactive features',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
    },
    {
      name: 'Mapecontrol Website',
      description: 'Freelance project: Redesigned company website with modern layout and responsive design',
      technologies: ['WordPress', 'Web Design', 'Responsive UI', 'SEO']
    },
    {
      name: 'Esploriamo Italia Website',
      description: 'Freelance project: Improved UX for a travel company website',
      technologies: ['WordPress', 'Web Design', 'Responsive UI', 'SEO']
    }
  ]
};

const SimpleChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isOnline, setIsOnline] = useState(false); // Assume offline by default
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Handle key press (Enter key)
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      handleSendMessage();
    }
  };

  // Send message
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      type: 'user',
      text: input,
      id: generateId(),
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    
    // Show typing indicator
    const typingMessage: Message = {
      type: 'bot',
      text: '...',
      id: generateId(),
      timestamp: new Date(),
      isTyping: true
    };
    
    setMessages(prevMessages => [...prevMessages, typingMessage]);
    
    // Generate response after a short delay
    setTimeout(() => {
      const botResponse = generateResponse(input.toLowerCase());
      
      setMessages(prevMessages => {
        // Remove typing indicator
        const filteredMessages = prevMessages.filter(msg => !msg.isTyping);
        
        return [...filteredMessages, {
          type: 'bot',
          text: botResponse.text,
          id: generateId(),
          timestamp: new Date(),
          suggestions: botResponse.suggestions
        }];
      });
    }, 800);
  };

  // Generate specific response for suggestion clicks
  const getSuggestionResponse = (suggestion: string) => {
    // Direct responses for specific suggestions
    switch (suggestion) {
      // Main categories
      case 'Contact Ramya':
        return {
          text: "📬 You can contact Ramya directly through the following channels:\n\n📧 Personal Email: ramya.shravanid@gmail.com\n📧 Professional Email: r.dasiga@studenti.unipi.it\n📱 WhatsApp: +91 7760669686\n☎️ For calls: +39 3513587870\n\nFeel free to reach out using any of these contact methods!",
          suggestions: ['Technical skills', 'Work experience', 'Education', 'Projects']
        };
        
      case 'Technical skills':
        return {
          text: `Technical Skills:\n\n• Frontend: ${portfolioData.skills.frontend.join(', ')}\n\n• Backend: ${portfolioData.skills.backend.join(', ')}\n\n• Database: ${portfolioData.skills.database.join(', ')}\n\n• Cloud & DevOps: ${portfolioData.skills.cloud.join(', ')}\n\n• Tools: ${portfolioData.skills.tools.join(', ')}`,
          suggestions: ['Frontend details', 'Backend details', 'Database expertise', 'Cloud & DevOps']
        };

      case 'Work experience':
        return {
          text: `💼 Professional Experience at ${portfolioData.experience.company} (${portfolioData.experience.period}):\n\nAs a ${portfolioData.experience.role}, Ramya:\n\n• ${portfolioData.experience.achievements.join('\n\n• ')}\n\n🌐 Freelancing:\n\nRamya also freelances with Mapecontrol and Esploriamo Italia, working on web development projects including website redesign, UX improvements, and responsive implementations.`,
          suggestions: ['Technical skills used', 'Project responsibilities', 'Freelance Projects']
        };

      case 'Education':
        const eduInfo = portfolioData.education.map(edu => 
          `• ${edu.degree} - ${edu.institution} (${edu.period}), ${edu.location}`
        ).join('\n\n');
        
        return {
          text: `🎓 Educational Background:\n\n${eduInfo}`,
          suggestions: ['Master\'s details', 'Bachelor\'s details', 'Related skills']
        };

      case 'Projects':
        return {
          text: `📂 Projects:\n\n${portfolioData.projects.map(proj => 
            `• ${proj.name}: ${proj.description} (${proj.technologies.join(', ')})`
          ).join('\n\n')}`,
          suggestions: ['Weather Application', 'Data Security Tool', 'Freelance Projects']
        };
        
      case 'Freelance Projects':
        return {
          text: `🌐 Freelance Projects:\n\n• Mapecontrol Website: ${portfolioData.freelance.companies[0].description} (${portfolioData.freelance.companies[0].technologies.join(', ')})\n\n• Esploriamo Italia Website: ${portfolioData.freelance.companies[1].description} (${portfolioData.freelance.companies[1].technologies.join(', ')})`,
          suggestions: ['Mapecontrol Website', 'Esploriamo Italia Website', 'Other projects']
        };
        
      case 'Mapecontrol Website':
        return {
          text: `Mapecontrol Website: As a freelancer, Ramya redesigned the company website with a modern layout and responsive design. The project focused on improving user experience, implementing SEO best practices, and ensuring the site works well on all device sizes. Technologies used include WordPress, custom CSS, and responsive design techniques.`,
          suggestions: ['Esploriamo Italia Website', 'Other projects', 'Technical skills']
        };
        
      case 'Esploriamo Italia Website':
        return {
          text: `Esploriamo Italia Website: In this freelance project for a travel company, Ramya improved the user experience of their existing website. The work included enhancing navigation, optimizing page loading speed, implementing responsive design techniques, and applying SEO best practices to increase visibility. The site was built using WordPress with custom styling.`,
          suggestions: ['Mapecontrol Website', 'Other projects', 'Technical skills']
        };

      // Skill details
      case 'Frontend details':
      case 'Frontend skills':
        return {
          text: `🖥️ Frontend Skills: ${portfolioData.skills.frontend.join(', ')}\n\nRamya has extensive experience in frontend development, creating responsive and interactive user interfaces. She specializes in React and TypeScript, building component-based architecture with modern design principles. Her work focuses on creating intuitive user experiences that perform well across all device sizes.`,
          suggestions: ['Backend skills', 'Database expertise', 'Project examples']
        };

      case 'Backend details':
      case 'Backend skills':
        return {
          text: `⚙️ Backend Skills: ${portfolioData.skills.backend.join(', ')}\n\nRamya specializes in C# and ASP.NET technologies for building robust server-side applications. She has developed RESTful APIs, implemented authentication systems, and designed scalable architecture. Her backend work includes efficient data processing and secure application development.`,
          suggestions: ['Frontend skills', 'Database expertise', 'Cloud technologies']
        };

      case 'Database expertise':
      case 'Database skills':
        return {
          text: `💾 Database Skills: ${portfolioData.skills.database.join(', ')}\n\nRamya has strong expertise in database technologies including SQL Server and MongoDB. Her experience includes database design, query optimization (improving query speed by 30%), data modeling, and implementing efficient stored procedures that handle 1M+ records for critical operations.`,
          suggestions: ['Frontend skills', 'Backend skills', 'Cloud technologies']
        };

      case 'Cloud & DevOps':
      case 'Other technical skills':
        return {
          text: `☁️ Cloud & DevOps Skills: ${portfolioData.skills.cloud.join(', ')}\n\nRamya has implemented automated deployment pipelines using AWS that reduced deployment time by 60%. She has experience with Docker containerization, CI/CD workflows, and maintained cron jobs on Virtual EC2 Servers with 99% uptime for business-critical applications.`,
          suggestions: ['Frontend skills', 'Backend skills', 'Database expertise']
        };

      // Project details
      case 'Weather Application':
        const weatherProject = portfolioData.projects.find(p => p.name.includes('Weather'));
        return {
          text: `${weatherProject?.name}: ${weatherProject?.description}\n\nThis application provides users with real-time weather data including temperature, humidity, wind speed, and forecasts. It features a clean, intuitive interface with responsive design that works well on all devices.\n\nTechnologies: ${weatherProject?.technologies.join(', ')}`,
          suggestions: ['Data Security Tool', 'Portfolio Website', 'Technical skills']
        };

      case 'Data Security Tool':
        const securityProject = portfolioData.projects.find(p => p.name.includes('Security'));
        return {
          text: `${securityProject?.name}: ${securityProject?.description}\n\nThis tool provides secure encryption of sensitive information using the SALT algorithm, which adds random data to the hashing process. It's particularly useful for securing connection strings and password storage in applications.\n\nTechnologies: ${securityProject?.technologies.join(', ')}`,
          suggestions: ['Weather Application', 'Portfolio Website', 'Technical skills']
        };

      case 'Portfolio Website':
        const portfolioProject = portfolioData.projects.find(p => p.name.includes('Portfolio'));
        return {
          text: `${portfolioProject?.name}: ${portfolioProject?.description}\n\nThis website showcases Ramya's professional experience, technical skills, and projects. It features responsive design, interactive elements, and this very chatbot assistant you're using now!\n\nTechnologies: ${portfolioProject?.technologies.join(', ')}`,
          suggestions: ['Weather Application', 'Data Security Tool', 'Technical skills']
        };

      case 'Other projects':
        return {
          text: `📂 Projects:\n\n${portfolioData.projects.slice(0, 3).map(proj => 
            `• ${proj.name}: ${proj.description} (${proj.technologies.join(', ')})`
          ).join('\n\n')}\n\n🌐 Freelance Projects:\n\n• ${portfolioData.projects[3].name}: ${portfolioData.projects[3].description}\n\n• ${portfolioData.projects[4].name}: ${portfolioData.projects[4].description}`,
          suggestions: ['Weather Application', 'Data Security Tool', 'Freelance Projects']
        };

      // Education details
      case 'Master\'s details':
        const masters = portfolioData.education[0];
        return {
          text: `🎓 ${masters.degree} - ${masters.institution} (${masters.period})\n\nRamya is currently studying Data Science and Business Informatics at the University of Pisa in Italy. Her program focuses on advanced data analysis, machine learning, and business intelligence with an emphasis on practical applications. Through this program, she's developing skills in data mining, statistical modeling, and data visualization.`,
          suggestions: ['Bachelor\'s details', 'Technical skills', 'Projects']
        };

      case 'Bachelor\'s details':
        const bachelors = portfolioData.education[1];
        return {
          text: `🎓 ${bachelors.degree} - ${bachelors.institution} (${bachelors.period})\n\nRamya completed her Bachelor's degree in Information Science and Engineering at Sai Vidya Institute of Technology in Bangalore, India. She graduated with distinction, focusing on computer science fundamentals, software engineering practices, and practical application development.`,
          suggestions: ['Master\'s details', 'Technical skills', 'Work experience']
        };

      // Work experience details
      case 'Technical skills used':
        return {
          text: `At Autodesk, Ramya utilized:\n\n• C# and ASP.NET MVC for backend development\n• SQL Server for database management and optimization\n• JavaScript and frontend technologies for UI development\n• AWS services for deployment and hosting\n• CI/CD tools for automated deployment pipelines`,
          suggestions: ['Project responsibilities', 'Team collaboration', 'Projects']
        };

      case 'Project responsibilities':
        return {
          text: `At Autodesk, Ramya was responsible for:\n\n• Leading development of the Pricing Willow Application\n• Optimizing database queries for improved performance\n• Implementing automated deployment pipelines\n• Developing responsive user interfaces\n• Maintaining cron jobs on EC2 servers\n• Resolving critical bugs and reducing backlog`,
          suggestions: ['Technical skills used', 'Team collaboration', 'Education']
        };

      case 'Team collaboration':
        return {
          text: `At Autodesk, Ramya collaborated with cross-functional teams including:\n\n• Product managers to refine requirements\n• UX designers to implement responsive interfaces\n• QA engineers to ensure quality standards\n• DevOps team for deployment automation\n• Junior developers whom she mentored\n\nShe worked in an Agile environment using JIRA for project management.`,
          suggestions: ['Technical skills used', 'Project responsibilities', 'Projects']
        };

      // Thank you and contact related suggestions
      case 'Thank you': 
        return {
          text: "You're welcome! I'm glad I could provide the information you were looking for. Remember, you can always contact Ramya directly using her contact details. Is there anything else you'd like to know?",
          suggestions: ['Technical skills', 'Contact Ramya', 'Education']
        };
        
      // Default fallback
      default:
        return null;
    }
  };

  // Generate response based on user input
  const generateResponse = (input: string) => {
    // First check if we have a specific response for this text
    const specificResponse = getSuggestionResponse(input);
    if (specificResponse) return specificResponse;

    // Check for greetings
    if (/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/.test(input)) {
      return {
        text: "👋 Hello! I'm Ramya's portfolio assistant. How can I help you today?",
        suggestions: ['Technical skills', 'Work experience', 'Education', 'Projects']
      };
    }
    
    // Check for skills related queries
    if (input.includes('skill') || input.includes('technology') || input.includes('tech') || input.includes('programming')) {
      if (input.includes('frontend')) {
        return getSuggestionResponse('Frontend details');
      } else if (input.includes('backend')) {
        return getSuggestionResponse('Backend details');
      } else if (input.includes('database')) {
        return getSuggestionResponse('Database expertise');
      } else if (input.includes('cloud') || input.includes('devops')) {
        return getSuggestionResponse('Cloud & DevOps');
      } else {
        return getSuggestionResponse('Technical skills');
      }
    }
    
    // Check for freelance related queries
    if (input.includes('freelance') || input.includes('freelancer') || input.includes('mapecontrol') || input.includes('esploriamo') || input.includes('italia')) {
      return getSuggestionResponse('Freelance Projects');
    }
    
    // Check for experience related queries
    if (input.includes('experience') || input.includes('work') || input.includes('job') || input.includes('autodesk')) {
      return getSuggestionResponse('Work experience');
    }
    
    // Check for education related queries
    if (input.includes('education') || input.includes('university') || input.includes('college') || input.includes('degree') || input.includes('study') || input.includes('pisa')) {
      if (input.includes('master') || input.includes('pisa')) {
        return getSuggestionResponse('Master\'s details');
      } else if (input.includes('bachelor') || input.includes('undergraduate')) {
        return getSuggestionResponse('Bachelor\'s details');
      } else {
        return getSuggestionResponse('Education');
      }
    }
    
    // Check for project related queries
    if (input.includes('project') || input.includes('portfolio') || input.includes('weather') || input.includes('security')) {
      if (input.includes('weather')) {
        return getSuggestionResponse('Weather Application');
      } else if (input.includes('security')) {
        return getSuggestionResponse('Data Security Tool');
      } else if (input.includes('portfolio')) {
        return getSuggestionResponse('Portfolio Website');
      } else {
        return getSuggestionResponse('Projects');
      }
    }
    
    // Check for contact related queries
    if (input.includes('contact') || input.includes('email') || input.includes('phone') || input.includes('reach') || input.includes('call')) {
      return {
        text: "📬 Since Ramya is currently offline, you can contact her directly through the following channels:\n\n📧 Personal Email: ramya.shravanid@gmail.com\n📧 Professional Email: r.dasiga@studenti.unipi.it\n📱 WhatsApp: +91 7760669686\n☎️ For calls: +39 3513587870\n\nFeel free to reach out using any of these contact methods!",
        suggestions: ['Technical skills', 'Projects', 'Education', 'Thank you']
      };
    }
    
    // Default response if no patterns match
    return {
      text: "I'm not sure I understood that. I can provide information about Ramya's technical skills, work experience, education, or projects. How can I help you?",
      suggestions: ['Technical skills', 'Work experience', 'Education', 'Projects']
    };
  };

  // Handle suggestion clicks
  const handleSuggestionClick = (suggestion: string) => {
    // Add user message showing what they clicked
    const userMessage: Message = {
      type: 'user',
      text: suggestion,
      id: generateId(),
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    // Show typing indicator
    const typingMessage: Message = {
      type: 'bot',
      text: '...',
      id: generateId(),
      timestamp: new Date(),
      isTyping: true
    };
    
    setMessages(prevMessages => [...prevMessages, typingMessage]);
    
    // Generate response after a short delay
    setTimeout(() => {
      // First check for a specific suggestion response
      const specificResponse = getSuggestionResponse(suggestion);
      const botResponse = specificResponse || generateResponse(suggestion.toLowerCase());
      
      setMessages(prevMessages => {
        // Remove typing indicator
        const filteredMessages = prevMessages.filter(msg => !msg.isTyping);
        
        return [...filteredMessages, {
          type: 'bot',
          text: botResponse.text,
          id: generateId(),
          timestamp: new Date(),
          suggestions: botResponse.suggestions
        }];
      });
    }, 800);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-portfolioBlue to-purple-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="p-3 bg-gradient-to-r from-portfolioBlue to-purple-500 text-white flex items-center justify-between">
            <h3 className="font-medium">Chat with Ramya's Assistant</h3>
            <div className="flex items-center">
              <span className="text-xs px-2 py-1 bg-red-500 rounded-full flex items-center">
                <span className="w-2 h-2 rounded-full bg-white mr-1"></span>
                Offline
              </span>
            </div>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-3 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-portfolioBlue text-white rounded-tr-none'
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  {msg.isTyping ? (
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  ) : (
                    <>
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                      <span className="text-xs mt-1 opacity-75 block">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
            
            {/* Message suggestions */}
            {messages.length > 0 && messages[messages.length - 1].type === 'bot' && !messages[messages.length - 1].isTyping && messages[messages.length - 1].suggestions && (
              <div className="flex flex-wrap gap-2 mt-2">
                {messages[messages.length - 1].suggestions.map((suggestion, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="bg-gray-100 hover:bg-gray-200 text-sm px-3 py-1 rounded-full text-gray-800 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
            
            {/* Auto-scroll anchor */}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <div className="p-3 border-t border-gray-200 bg-white flex items-center">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-portfolioBlue"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 w-10 h-10 rounded-full bg-gradient-to-r from-portfolioBlue to-purple-500 text-white flex items-center justify-center hover:shadow-md transition-all"
              aria-label="Send message"
              disabled={input.trim() === ''}
            >
              <Send size={18} />
            </button>
          </div>
          
          {/* Footer */}
          <div className="px-3 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-500">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => {
                  setMessages(initialMessages);
                  setInput('');
                }} 
                className="text-portfolioBlue hover:underline flex items-center gap-1"
              >
                <AlertCircle size={12} />
                <span>Reset chat</span>
              </button>
              
              <a 
                href="#contact" 
                className="text-portfolioBlue hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Contact form
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleChat;
