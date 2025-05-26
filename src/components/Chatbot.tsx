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
    text: "👋 Hello! I'm Ramya's portfolio assistant. I can provide information about her professional experience at Autodesk, technical skills in C#, ASP.NET, JavaScript and more, education at University of Pisa and projects like the Real-time Weather Application. How can I help you?",
    id: generateId(),
    timestamp: new Date(),
    suggestions: ['Technical skills', 'Work experience', 'Education', 'Projects']
  }
];

// Skills categories with detailed descriptions
const technicalSkills = {
  frontend: {
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
    description: 'Ramya has extensive experience in frontend development with React, creating responsive and interactive user interfaces. She is proficient in JavaScript and TypeScript, along with modern CSS frameworks like Tailwind CSS. Her frontend work includes component-based architecture, state management, and responsive design principles.'
  },
  backend: {
    skills: ['C#', 'ASP.NET', 'Node.js', 'Express', 'REST APIs', '.NET Core'],
    description: 'In backend development, Ramya specializes in C# and ASP.NET technologies. She has built robust REST APIs, implemented middleware solutions, and designed server-side applications. Her experience includes working with both .NET framework and .NET Core, building scalable microservices and web applications.'
  },
  database: {
    skills: ['SQL Server', 'MongoDB', 'PostgreSQL', 'Query Optimization', 'Database Design', 'ORM tools'],
    description: 'Ramya has strong database expertise across SQL and NoSQL technologies. She has designed database schemas, performed query optimization that improved performance by 40%, and implemented data migration strategies. She is skilled in using ORM tools and writing efficient stored procedures.'
  },
  cloud: {
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Cloud Infrastructure'],
    description: 'Ramya has worked with AWS and Azure cloud platforms, implementing serverless architectures and managing cloud infrastructure. She has experience with containerization using Docker, orchestration with Kubernetes, and setting up automated CI/CD pipelines for continuous deployment.'
  },
  tools: {
    skills: ['Git', 'Docker', 'CI/CD', 'Visual Studio', 'VS Code', 'Jira', 'Agile Methodologies'],
    description: 'Ramya is proficient with development tools like Git for version control, Docker for containerization, and various IDEs. She has experience with agile development methodologies, project management using Jira, and technical documentation.'
  },
  dataScience: {
    skills: ['Python', 'Data Analysis', 'Machine Learning Basics', 'Visualization', 'SQL for Analytics'],
    description: 'Through her Master\'s program, Ramya is developing skills in data science using Python, statistical analysis, and visualization techniques. She is learning about machine learning algorithms and applying data science concepts to business problems.'
  }
};

// Projects with detailed information
const projects = [
  {
    name: 'Pricing Tool Solution',
    description: 'Developed a comprehensive pricing tool solution for Autodesk that improved efficiency by 40% and enhanced pricing accuracy by 25%. The tool automated complex pricing calculations, integrated with existing CRM systems, and provided analytics for sales performance.',
    detailedDescription: 'This enterprise pricing tool solution was built to support Autodesk\'s global sales team. It featured a React frontend with dynamic forms and visualization components, an ASP.NET backend with complex business logic processing, and SQL Server database integration with optimized query performance. The project involved collaboration with product managers, sales teams, and IT infrastructure specialists to ensure the tool met all business requirements and security standards.',
    challenges: 'Key challenges included handling multi-currency support, implementing complex discount rules, ensuring high performance with large data sets, and creating a user-friendly interface for non-technical sales staff.',
    achievements: 'The solution reduced pricing calculation time by 40%, decreased pricing errors by 25%, and enabled the sales team to generate quotes 3x faster than before. It was successfully deployed to over 500 sales representatives globally.',
    technologies: ['C#', 'ASP.NET', 'SQL Server', 'React', 'Redux', 'REST APIs', 'Microsoft Azure'],
    role: 'Lead Developer',
    responsibilities: 'Led development team, designed system architecture, implemented core backend services, established coding standards, conducted code reviews, and coordinated with stakeholders.'
  },
  {
    name: 'Database Optimization',
    description: 'Optimized SQL queries and database structure resulting in 30% faster data retrieval and 45% reduction in server load. This project involved redesigning database schemas, implementing efficient indexing strategies, and refactoring stored procedures.',
    detailedDescription: 'This database optimization project addressed performance bottlenecks in Autodesk\'s internal applications. It involved thorough analysis of query execution plans, restructuring database schemas, implementing appropriate indexing strategies, and rewriting inefficient stored procedures. The optimization work supported applications used by hundreds of concurrent users, processing millions of records daily.',
    challenges: 'Major challenges included maintaining system availability during optimization, ensuring backward compatibility with existing applications, and balancing performance improvements with maintenance considerations.',
    achievements: 'The optimization resulted in 30% faster query execution, 45% reduction in server CPU load, 60% decrease in database timeout errors, and significantly improved application responsiveness for end users.',
    technologies: ['SQL Server', 'Stored Procedures', 'Query Optimization', 'Performance Tuning', 'Indexing Strategies', 'Execution Plan Analysis'],
    role: 'Database Developer',
    responsibilities: 'Analyzed database performance metrics, identified bottlenecks, redesigned database schemas, implemented indexing strategies, optimized stored procedures, and documented best practices.'
  },
  {
    name: 'Portfolio Website',
    description: 'Designed and developed a personal portfolio website using modern web technologies. The site showcases professional experience, technical skills, and projects with an interactive and responsive design.',
    detailedDescription: 'This portfolio website was built as a showcase of Ramya\'s technical abilities and professional experience. It features a modern, responsive design with interactive elements including animations, a custom chatbot assistant, and dynamically rendered content. The site is optimized for performance, accessibility, and search engine visibility.',
    challenges: 'Creating a performant single-page application with smooth animations, implementing a responsive design that works across all device sizes, and developing an interactive chatbot feature to enhance user engagement.',
    achievements: 'Successfully created a professional portfolio that effectively showcases skills and experience, implemented advanced frontend techniques including animations and responsive design, and built an interactive chatbot to provide information to visitors.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsive Design', 'CSS Animations'],
    role: 'Full Stack Developer',
    responsibilities: 'Designed UI/UX, implemented frontend components, created responsive layouts, developed interactive features, optimized performance, and deployed the application.'
  },
  {
    name: 'E-commerce Platform Integration',
    description: 'Integrated multiple payment processors and shipping providers into an e-commerce platform, increasing payment options by 200% and reducing shipping calculation errors by 35%.',
    detailedDescription: 'This project involved integrating various payment gateways and shipping APIs into an existing e-commerce platform. The integration required building middleware services to handle communication between the e-commerce system and external providers, implementing secure payment processing workflows, and creating a unified interface for managing diverse shipping options.',
    challenges: 'Ensuring consistent behavior across different payment processors, handling service outages gracefully, maintaining PCI compliance for payment processing, and optimizing shipping calculations for international deliveries.',
    achievements: 'Expanded available payment methods from 3 to 9 options, reduced shipping calculation errors by 35%, decreased cart abandonment rate by 15%, and improved overall checkout completion rate by 22%.',
    technologies: ['Node.js', 'Express', 'Payment Gateway APIs', 'Shipping Provider APIs', 'Redis', 'MongoDB'],
    role: 'Integration Specialist',
    responsibilities: 'Designed integration architecture, implemented API clients for payment and shipping services, developed error handling and fallback mechanisms, created admin interfaces for monitoring integrations.'
  }
];

// Education details with comprehensive information
const education = [
  {
    degree: "Master of Science (M.S) in Data Science and Business Informatics",
    institution: "University of Pisa (UniPi)",
    period: "November 2024 - Present",
    location: "Pisa, Italy",
    details: "Focusing on data science, machine learning, and business analytics with an emphasis on real-world applications.",
    coursework: [
      "Advanced Data Analysis and Statistical Methods",
      "Machine Learning Algorithms and Applications",
      "Big Data Technologies and Cloud Computing",
      "Business Intelligence and Decision Support Systems",
      "Data Visualization and Communication",
      "Predictive Analytics for Business"
    ],
    skills: [
      "Data mining and analysis",
      "Statistical modeling",
      "Machine learning implementation",
      "Business intelligence tools",
      "Python for data science",
      "R programming language"
    ],
    achievements: "Currently maintaining a high academic standing while developing practical data science skills through project-based learning and industry collaborations.",
    projects: "Working on a research project analyzing consumer behavior patterns using machine learning techniques in collaboration with local businesses.",
    contact: "r.dasiga@studenti.unipi.it"
  },
  {
    degree: "Bachelor of Engineering (B.E) in Information Science and Engineering",
    institution: "Sai Vidya Institute of Technology (VTU)",
    period: "August 2016 - August 2020",
    location: "Bangalore, India",
    details: "Graduated with distinction, focused on computer science fundamentals, software engineering practices, and practical application development.",
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Web Technologies and Internet Applications",
      "Software Engineering and Project Management",
      "Computer Networks and Security"
    ],
    skills: [
      "Java programming",
      "Web development fundamentals",
      "Database design and SQL",
      "Software development lifecycle",
      "Algorithm design and analysis",
      "Team collaboration and project management"
    ],
    achievements: "Graduated with distinction (First Class with Distinction) with a cumulative GPA of 8.7/10. Received the 'Outstanding Academic Performance' award in the final year.",
    projects: "Final year project involved developing a web-based student management system with role-based access control, automated attendance tracking, and performance analytics.",
    extracurricular: "Served as Technical Club Secretary, organizing workshops and technical competitions. Participated in multiple hackathons and coding competitions."
  }
];

// Define response categories
const botResponses = {
  greetings: {
    hello: "👋 Hello! I'm Ramya's digital echo! Want to hear about her code adventures, Autodesk quests, or academic journeys? I've got the scoop!",
    hi: "✨ Hi there! Consider me your guide through Ramya's tech universe! Frontend galaxies, backend constellations, or data science nebulae - where shall we explore?",
    hey: "🚀 Hey! Ready for a tour of Ramya's professional landscape? From C# mountains to React valleys, Autodesk achievements to Pisan studies - what catches your eye?",
    greetings: "🌟 Greetings, explorer! You've discovered Ramya's interactive portfolio companion! Shall I tell you tales of code crafting, database wizardry, or educational expeditions?",
    morning: "☕ Good morning! While you're starting your day, would you like to discover Ramya's tech skills, Autodesk stories, or academic pursuits? Consider me your portfolio barista!",
    afternoon: "🌞 Good afternoon! Taking a break? Let me brighten it with stories of Ramya's coding powers, work achievements, or learning journeys! What piques your curiosity?",
    evening: "🌙 Good evening! As the day winds down, discover Ramya's professional narrative - from React interfaces to SQL optimizations, Autodesk innovations to Italian education!"
  },
  skills: {
    all: "⚡ Ramya's tech toolkit: \n🎨 Frontend: React, JS, TS, Tailwind\n🏗️ Backend: C#, ASP.NET, Node\n🔍 Database: SQL & NoSQL wizardry\n☁️ Cloud: AWS & Azure powers\n🧪 Data: Exploring Python & ML\nWhich skill dimension interests you?",
    frontend: "🎨 Frontend artistry: Ramya crafts responsive React interfaces with TypeScript precision. Her UI canvas features Tailwind palettes, component architecture, and state management magic. User experiences that delight? That's her specialty!",
    backend: "🏗️ Backend engineering: C# and ASP.NET form Ramya's backbone, with Node.js flexibility when needed. Her APIs are RESTful, her architecture scalable, and her code efficient. She builds digital engines that purr!",
    database: "🔍 Database mastery: SQL Server & MongoDB speak to Ramya! She turned sluggish queries into speed demons (40% faster!) through clever indexing, schema design, and optimization tricks. Data performance is her playground!",
    cloud: "☁️ Cloud navigation: AWS and Azure are Ramya's skies, where she deploys containers with Docker, orchestrates with Kubernetes, and automates with CI/CD pipelines. Her applications are built to soar in the cloud!",
    tools: "🛠️ Tool expertise: Git commits, Docker containers, VS Code extensions - Ramya's development flow is streamlined and efficient. She brings Agile methodology and clean documentation to every project!",
    dataScience: "📊 Data science journey: Ramya's newest adventure! Python analysis, statistical modeling, and machine learning algorithms are becoming her new superpowers through her Master's program."
  },
  experience: {
    general: "💼 Autodesk chapter (2021-2023): Ramya transformed pricing tools (40% more efficient!), rescued databases from performance issues, and collaborated across teams to deliver software magic. Her code boosted sales efficiency and her optimizations made queries sprint instead of crawl!",
    autodesk: "🚀 Autodesk spotlight: As Software Developer (2021-2023), Ramya:\n• Led pricing tool development (+40% efficiency)\n• Optimized database performance (+30% speed)\n• Crafted integrations between systems\n• Mentored junior devs\nTech stack: C#, React, SQL Server, Azure",
    projects: "🏆 Project showcase:\n1️⃣ Pricing Tool: Sales team supercharger with React frontend & C# backend\n2️⃣ Database Optimization: Queries 30% faster, server load 45% lighter\n3️⃣ Portfolio Website: This digital garden you're exploring!\n4️⃣ E-commerce Integration: Multiple payment & shipping systems in harmony\nWhich interests you?"
  },
  education: {
    all: "🎓 Learning path:\n📚 Now: Data Science & Business Informatics Master's @University of Pisa, Italy\n📚 Before: Information Science & Engineering Bachelor's @Sai Vidya Institute, India (with distinction & 8.7/10 GPA)\nWhich chapter of her academic journey interests you?",
    masters: "🔬 Data Science Master's @University of Pisa (2024-Present): Ramya's diving into machine learning algorithms, big data technologies, and business intelligence tools. Her current quest: transforming consumer data into business insights through Python and statistical magic!",
    bachelors: "🏆 Engineering Bachelor's @Sai Vidya Institute (2016-2020): Graduated with distinction (8.7/10 GPA) and an 'Outstanding Performance' award! Created a student management system for her final project and led the Technical Club while mastering algorithms, OOP, and software engineering."
  },
  contact: {
    email: "📧 Drop a line to r.dasiga@studenti.unipi.it – Ramya's digital mailbox! She usually replies within a sunrise or two (1-2 business days).",
    form: "📝 Easiest path to Ramya? The contact form below! Just scroll down, type your message, hit send, and watch the digital carrier pigeons take flight!",
    all: "📲 Ramya connection options:\n✉️ Email: r.dasiga@studenti.unipi.it\n📋 Contact form: Just scroll down!\n🔗 Professional networks: Check the footer\n📄 CV download: Button in the nav bar\nPick your communication adventure!"
  },
  location: "🌍 Pisa, Italy is Ramya's current base camp! She's exploring data science at the historic University of Pisa. Previously: coding adventures in Bangalore, India.",
  cv: "📄 Grab Ramya's CV from the navbar button! It's her tech journey in PDF form - Autodesk highlights, Pisa education, and her full tech arsenal.",
  help: "🦸‍♀️ I'm your guide to all things Ramya! Ask about her coding superpowers, work adventures, academic quests, or digital creations. What's your curiosity?",
  fallback: {
    general: "✨ Ramya's tech identity: C# ninja, React artist, database optimizer. Autodesk alum now exploring data science in Pisa after acing her Bangalore engineering degree. What part of her story intrigues you?",
    clarification: "🔮 Ramya's multiverses: 1) Code craftsman with React & C# magic, 2) Autodesk problem-solver, 3) Data science student in Italy, 4) Engineering grad from India. Which universe shall we explore?",
    suggestion: "🚀 Ramya's tech orbit: Revolves around frontend galaxies (React), backend solar systems (C#), database planets (SQL optimization), and now exploring data science constellations at Pisa. Where should we navigate?"
  },
  personal: {
    aboutMe: "🔥 Ramya's passion equation: code + creativity + curiosity! Bug hunter by day, tech explorer by night. When not optimizing databases, she's hiking Pisa's trails or tinkering with open-source projects.",
    strengths: "💪 Ramya's superpowers: Database whispering, UI enchantment, code optimization, and technology shapeshifting. Her secret weapon? Turning complex problems into elegant solutions!",
    interests: "🌱 Beyond the keyboard: Ramya visualizes data stories, tames machine learning algorithms, and crafts interfaces that feel like magic. Currently: blending business and data science at Pisa!"
  }
};

// Helper function to generate random ID
function generateId() {
  return Math.random().toString(36).substring(2, 15);
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [context, setContext] = useState<ConversationContext>(initialContext);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Reset feedback message after a delay
  useEffect(() => {
    if (feedbackMessage) {
      const timer = setTimeout(() => {
        setFeedbackMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [feedbackMessage]);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    
    // If we're opening the chat and there have been no messages in a while, add a greeting
    if (!isOpen && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      const timeSinceLastMessage = new Date().getTime() - lastMessage.timestamp.getTime();
      
      // If it's been more than 2 minutes since the last message
      if (timeSinceLastMessage > 2 * 60 * 1000) {
        const welcomeBackMessage: Message = {
          type: 'bot',
          text: context.userName ? 
            `Welcome back, ${context.userName}! How can I help you?` : 
            "Welcome back! How can I help you?",
          id: generateId(),
          timestamp: new Date(),
          suggestions: ['Resume our conversation', 'Start a new topic']
        };
        setMessages(prev => [...prev, welcomeBackMessage]);
      }
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  
  const determineUserSentiment = (userInput: string): 'positive' | 'neutral' | 'negative' => {
    const positiveTerms = ['good', 'great', 'excellent', 'awesome', 'amazing', 'thank', 'thanks', 'helpful', 'love', 'like'];
    const negativeTerms = ['bad', 'terrible', 'awful', 'useless', 'not helpful', 'doesn\'t help', 'confused', 'confusing', 'wrong'];
    
    const lowerInput = userInput.toLowerCase();
    
    if (positiveTerms.some(term => lowerInput.includes(term))) {
      return 'positive';
    } else if (negativeTerms.some(term => lowerInput.includes(term))) {
      return 'negative';
    }
    
    return 'neutral';
  };
  
  const extractUserName = (input: string): string | null => {
    // Common patterns for name introduction
    const patterns = [
      /my name is (\w+)/i,
      /i am (\w+)/i,
      /i'm (\w+)/i,
      /call me (\w+)/i,
      /(\w+) here/i
    ];
    
    for (const pattern of patterns) {
      const match = input.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    
    return null;
  };
  
  const findResponse = (userInput: string): { text: string, suggestions?: string[], followUp?: boolean } => {
    // Convert to lowercase for easier matching
    const lowerInput = userInput.toLowerCase();
    const newContext = { ...context };
    
    // Extract user name if shared
    const userName = extractUserName(userInput);
    if (userName) {
      newContext.userName = userName;
    }
    
    // Update sentiment
    newContext.sentiment = determineUserSentiment(userInput);
    
    // Increment conversation count
    newContext.conversationCount += 1;
    
    // Check if user is asking about themselves
    if (lowerInput.includes('about me') || lowerInput.includes('who am i')) {
      if (newContext.userName) {
        return { 
          text: `You introduced yourself as ${newContext.userName}. I'm Ramya's virtual assistant, here to help you learn more about her skills, education, and experience.`,
          suggestions: ['Tell me about Ramya', 'What projects has Ramya worked on?']
        };
      } else {
        return { 
          text: "You haven't introduced yourself yet. Would you like to tell me your name?",
          suggestions: ['My name is...', 'I prefer to stay anonymous']
        };
      }
    }
    
    // Check if this is a follow-up question
    if (newContext.lastTopic) {
      // Follow-up on skills
      if (newContext.lastTopic === 'skills') {
        if (lowerInput.includes('frontend')) {
          newContext.lastTopic = 'skills-frontend';
          return { 
            text: botResponses.skills.frontend,
            suggestions: ['What about backend?', 'Database skills?', 'Cloud technologies?']
          };
        } else if (lowerInput.includes('backend')) {
          newContext.lastTopic = 'skills-backend';
          return { 
            text: botResponses.skills.backend,
            suggestions: ['Frontend skills?', 'Database experience?', 'What projects used these skills?']
          };
        } else if (lowerInput.includes('database')) {
          newContext.lastTopic = 'skills-database';
          return { 
            text: botResponses.skills.database,
            suggestions: ['Cloud experience?', 'Projects using databases?', 'Tell me about other skills']
          };
        } else if (lowerInput.includes('cloud')) {
          newContext.lastTopic = 'skills-cloud';
          return { 
            text: botResponses.skills.cloud,
            suggestions: ['Projects using cloud?', 'Other technical skills?', 'Experience at Autodesk']
          };
        }
      }
      
      // Follow-up on education
      if (newContext.lastTopic === 'education') {
        if (lowerInput.includes('master') || lowerInput.includes('pisa')) {
          newContext.lastTopic = 'education-masters';
          return { 
            text: botResponses.education.masters,
            suggestions: ['Tell me about her Bachelor\'s', 'What skills did she gain?', 'How does this relate to her work?']
          };
        } else if (lowerInput.includes('bachelor') || lowerInput.includes('undergraduate') || lowerInput.includes('bangalore')) {
          newContext.lastTopic = 'education-bachelors';
          return { 
            text: botResponses.education.bachelors,
            suggestions: ['Tell me about her Master\'s', 'What skills did she learn?', 'Work experience after graduation']
          };
        }
      }
      
      // Follow-up on experience
      if (newContext.lastTopic === 'experience') {
        if (lowerInput.includes('autodesk')) {
          newContext.lastTopic = 'experience-autodesk';
          return { 
            text: botResponses.experience.autodesk,
            suggestions: ['What technologies did she use?', 'Tell me about her projects', 'Education background']
          };
        } else if (lowerInput.includes('project')) {
          newContext.lastTopic = 'experience-projects';
          return { 
            text: botResponses.experience.projects,
            suggestions: ['Pricing Tool project', 'Database Optimization', 'Portfolio Website']
          };
        }
      }
      
      // Handle project-specific follow-ups
      if (newContext.lastTopic.startsWith('project-')) {
        const projectName = newContext.lastTopic.replace('project-', '').toLowerCase();
        const project = projects.find(p => p.name.toLowerCase().includes(projectName));
        
        if (project) {
          if (lowerInput.includes('technolog') || lowerInput.includes('tech stack') || lowerInput.includes('built with')) {
            return {
              text: `For the ${project.name}, Ramya used ${project.technologies.join(', ')}.`,
              suggestions: ['What was her role?', 'Project details', 'Other projects']
            };
          } else if (lowerInput.includes('role') || lowerInput.includes('responsibility')) {
            return {
              text: `In the ${project.name} project, Ramya worked as a ${project.role}.`,
              suggestions: ['Technologies used', 'Project details', 'Other projects']
            };
          }
        }
      }
    }
    
    // Handle specific project inquiries with more comprehensive responses
    for (const project of projects) {
      if (lowerInput.includes(project.name.toLowerCase())) {
        newContext.lastTopic = `project-${project.name.toLowerCase()}`;
        
        // Build a comprehensive response about the project
        const projectResponse = `${project.name}: ${project.detailedDescription}\n\nTechnologies: ${project.technologies.join(', ')}\n\nRole: ${project.role}\n\nResponsibilities: ${project.responsibilities}\n\nChallenges: ${project.challenges}\n\nAchievements: ${project.achievements}`;
        
        return {
          text: projectResponse,
          suggestions: ['What technologies were used?', 'Challenges faced', 'Other projects']
        };
      }
    }
    
    // Check for greeting patterns
    if (lowerInput.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/)) {
      // If user already shared their name, personalize the greeting
      if (newContext.userName) {
        const greetingKey = Object.keys(botResponses.greetings).find(key => lowerInput.includes(key)) || 'hello';
        const greeting = botResponses.greetings[greetingKey as keyof typeof botResponses.greetings];
        
        return { 
          text: `Hi ${newContext.userName}! ${greeting}`,
          suggestions: ['Tell me about Ramya', 'Skills', 'Experience', 'Education']
        };
      } else if (newContext.conversationCount > 2 && !newContext.hasAskedName) {
        // After a few exchanges, ask for the user's name
        newContext.hasAskedName = true;
        return { 
          text: "Hi there! I'm curious, what's your name? It would help me personalize our conversation.",
          suggestions: ['My name is...', "I'd rather not say", "Let's talk about Ramya instead"]
        };
      } else {
        const greetingKey = Object.keys(botResponses.greetings).find(key => lowerInput.includes(key)) || 'hello';
        return { 
          text: botResponses.greetings[greetingKey as keyof typeof botResponses.greetings],
          suggestions: ['Tell me about Ramya', 'Skills', 'Experience', 'Education']
        };
      }
    }
    
    // Check for skill-related queries
    if (lowerInput.includes('skill') || lowerInput.includes('technology') || lowerInput.includes('tech stack') || lowerInput.includes('programming')) {
      newContext.lastTopic = 'skills';
      
      // Check for specific skill categories
      if (lowerInput.includes('frontend')) {
        return { text: botResponses.skills.frontend, suggestions: ['Backend skills', 'Database skills', 'Full skill set'] };
      } else if (lowerInput.includes('backend')) {
        return { text: botResponses.skills.backend, suggestions: ['Frontend skills', 'Database skills', 'Full skill set'] };
      } else if (lowerInput.includes('database')) {
        return { text: botResponses.skills.database, suggestions: ['Frontend skills', 'Backend skills', 'Full skill set'] };
      } else if (lowerInput.includes('cloud')) {
        return { text: botResponses.skills.cloud, suggestions: ['Frontend skills', 'Backend skills', 'Full skill set'] };
      } else {
        return { 
          text: botResponses.skills.all, 
          suggestions: ['Frontend skills', 'Backend development', 'Database expertise']
        };
      }
    }
    
    // Check for experience-related queries
    if (lowerInput.includes('experience') || lowerInput.includes('work') || lowerInput.includes('job') || lowerInput.includes('career') || lowerInput.includes('company') || lowerInput.includes('autodesk')) {
      newContext.lastTopic = 'experience';
      
      if (lowerInput.includes('autodesk')) {
        return { 
          text: botResponses.experience.autodesk,
          suggestions: ['Projects at Autodesk', 'Skills used at Autodesk', 'Education background']
        };
      } else {
        return { 
          text: botResponses.experience.general,
          suggestions: ['Autodesk details', 'Projects worked on', 'Technical skills']
        };
      }
    }
    
    // Check for education-related queries
    if (lowerInput.includes('education') || lowerInput.includes('degree') || lowerInput.includes('university') || lowerInput.includes('college') || lowerInput.includes('study') || lowerInput.includes('pisa') || lowerInput.includes('master') || lowerInput.includes('bachelor')) {
      newContext.lastTopic = 'education';
      newContext.mentionedEducation = true;
      
      if (lowerInput.includes('master') || lowerInput.includes('pisa')) {
        return { 
          text: botResponses.education.masters,
          suggestions: ['Bachelor\'s degree', 'Skills gained', 'Work experience']
        };
      } else if (lowerInput.includes('bachelor') || lowerInput.includes('undergraduate')) {
        return { 
          text: botResponses.education.bachelors,
          suggestions: ['Master\'s degree', 'Skills gained', 'Work after graduation'] 
        };
      } else {
        return { 
          text: botResponses.education.all,
          suggestions: ['Tell me about the Master\'s', 'Bachelor\'s details', 'How this relates to her work']
        };
      }
    }
    
    // Check for project-related queries
    if (lowerInput.includes('project') || lowerInput.includes('portfolio') || lowerInput.includes('application') || lowerInput.includes('developed') || lowerInput.includes('built')) {
      newContext.lastTopic = 'projects';
      return { 
        text: botResponses.experience.projects,
        suggestions: ['Pricing Tool project', 'Database Optimization', 'Portfolio Website', 'Technologies used']
      };
    }
    
    // Check for contact information requests
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach') || lowerInput.includes('message')) {
      newContext.lastTopic = 'contact';
      return { 
        text: botResponses.contact.all,
        suggestions: ['Download CV', 'Location', 'Other ways to connect']
      };
    }
    
    // Check for location queries
    if (lowerInput.includes('location') || lowerInput.includes('live') || lowerInput.includes('based') || lowerInput.includes('where') || lowerInput.includes('pisa') || lowerInput.includes('italy')) {
      newContext.lastTopic = 'location';
      return { 
        text: botResponses.location,
        suggestions: ['Education in Italy', 'Previous locations', 'Contact information']
      };
    }
    
    // Check for CV/resume requests
    if (lowerInput.includes('cv') || lowerInput.includes('resume') || lowerInput.includes('download')) {
      newContext.lastTopic = 'cv';
      return { 
        text: botResponses.cv,
        suggestions: ['Experience highlights', 'Education summary', 'Technical skills']
      };
    }
    
    // Handle thank you messages
    if (lowerInput.includes('thank') || lowerInput.includes('thanks') || lowerInput.includes('appreciate')) {
      return { 
        text: `You're welcome${newContext.userName ? ', ' + newContext.userName : ''}! I'm happy to help. Is there anything else you'd like to know about Ramya?`,
        suggestions: ['Tell me more about her projects', 'Education details', 'Technical skills']
      };
    }
    
    // Handle help requests
    if (lowerInput.includes('help') || lowerInput.includes('assist') || lowerInput.includes('what can you') || lowerInput.includes('how to')) {
      return { 
        text: botResponses.help,
        suggestions: ['Skills', 'Experience', 'Education', 'Projects']
      };
    }
    
    // Handle user asking about the chatbot itself
    if (lowerInput.includes('who are you') || lowerInput.includes('what are you') || lowerInput.includes('chatbot') || lowerInput.includes('assistant')) {
      return { 
        text: "I'm a virtual assistant for Ramya's portfolio website. I can provide information about her skills, experience, education, and projects. How can I help you today?",
        suggestions: ['Tell me about Ramya', 'Her experience', 'Skills', 'Education']
      };
    }
    
    // Check for personal questions about Ramya
    if (lowerInput.includes('about herself') || lowerInput.includes('about her') || lowerInput.includes('personality') || 
        lowerInput.includes('interests') || lowerInput.includes('hobbies') || lowerInput.includes('free time') || 
        lowerInput.includes('passion') || lowerInput.includes('like to do')) {
      newContext.lastTopic = 'personal';
      return { 
        text: botResponses.personal.aboutMe,
        suggestions: ['Professional strengths', 'Technical interests', 'Work experience']
      };
    }
    
    // Check for strengths/weaknesses questions
    if (lowerInput.includes('strength') || lowerInput.includes('good at') || lowerInput.includes('excel') || 
        lowerInput.includes('best at') || lowerInput.includes('expertise') || lowerInput.includes('specialized')) {
      newContext.lastTopic = 'strengths';
      return { 
        text: botResponses.personal.strengths,
        suggestions: ['Technical skills details', 'Projects showcasing strengths', 'Professional experience']
      };
    }
    
    // Check for personal questions about Ramya's strengths, interests, etc.
    if (lowerInput.includes('strength') || lowerInput.includes('good at') || 
        lowerInput.includes('best') || lowerInput.includes('specialized in')) {
      return {
        text: botResponses.personal.strengths,
        suggestions: ['Technical skills details', 'Professional experience', 'Education background']
      };
    }
    
    // Check for questions about Ramya personally
    if (lowerInput.includes('about ramya') || lowerInput.includes('tell me about ramya') || 
        lowerInput.includes('who is ramya') || lowerInput.includes('background')) {
      // Provide a comprehensive overview of Ramya
      return {
        text: `Ramya is a skilled software developer with experience in both frontend and backend technologies. She worked at Autodesk from May 2021 to December 2023 as a Software Developer, where she led development of a pricing tool solution and implemented database optimizations that significantly improved performance. She's currently pursuing a Master's degree in Data Science and Business Informatics at the University of Pisa, Italy, and previously completed a Bachelor's in Information Science and Engineering with distinction from Sai Vidya Institute of Technology in Bangalore, India. Her technical expertise includes C#, ASP.NET, React, JavaScript, SQL Server, and cloud technologies. She has worked on various projects showcasing her ability to develop comprehensive solutions and optimize existing systems.`,
        suggestions: ['Technical skills', 'Professional experience', 'Education details', 'Project portfolio']
      };
    }
    
    // Check for any keyword that might indicate a query
    // This helps catch questions that don't match our specific patterns
    const generalKeywords = ['ramya', 'she', 'her', 'developer', 'software', 'web', 'application', 'development', 'info', 'information', 'know', 'tell', 'what', 'how', 'when', 'where', 'why', 'experience', 'project', 'skill', 'technology', 'tech', 'work', 'job', 'education', 'study', 'degree', 'contact'];
    const hasGeneralQuery = generalKeywords.some(keyword => lowerInput.includes(keyword));
    
    // Update context before returning fallback
    setContext(newContext);
    
    // For any query that doesn't match our patterns, provide a creative summary
    // This ensures we always give useful information rather than saying "I don't know"
    const generateCreativeSummary = () => {
      const creativeResponses = [
        "✨ Ramya in a nutshell: Code wizard with React & C# superpowers. Turned database chaos into zen at Autodesk. Now exploring data science mysteries at University of Pisa. Previous life: Bangalore engineering star. Ask me about her digital adventures!",
        
        "🚀 Meet Ramya: Half frontend artist, half backend architect. Transformed Autodesk's pricing systems, saved databases from slow-motion disasters, and now embarking on a data science journey in Italy. What part of her tech journey intrigues you?",
        
        "💡 The Ramya Remix: JavaScript maestro + C# virtuoso + data science explorer. Created digital magic at Autodesk, optimized queries like a SQL whisperer, and currently adding Italian data science flavor to her tech recipe. What would you like to sample?",
        
        "🌟 Ramya's tech story: Crafted pixel-perfect interfaces with React, built robust backends with C#, and made databases run 40% faster! From Bangalore to Pisa, she's on a quest to turn data into insights. Which chapter interests you?"
      ];
      
      // Return a random creative response
      return creativeResponses[Math.floor(Math.random() * creativeResponses.length)];
    };
    
    // If it's a general query, provide creative information
    if (hasGeneralQuery) {
      // Choose a creative response
      return { 
        text: generateCreativeSummary(),
        suggestions: ['Tech skills', 'Work history', 'Education', 'Cool projects'],
        followUp: true
      };
    } else {
      // For completely unrelated queries, provide a creative summary
      return {
        text: generateCreativeSummary(),
        suggestions: ['Tell me about her skills', 'Work highlights', 'Education journey', 'Project showcase'],
        followUp: true
      };
    }
  };
  
  const generateFollowUpMessage = (currentTopic: string): Message | null => {
    // If no clear topic, don't generate a follow-up
    if (!currentTopic) return null;
    
    let followUpText = '';
    let suggestions: string[] = [];
    
    switch (currentTopic) {
      case 'skills':
        followUpText = "I can provide more specific information about Ramya's technical skills. She has expertise in frontend development (React, JavaScript, TypeScript), backend technologies (C#, ASP.NET, Node.js), database management (SQL Server, MongoDB), cloud platforms (AWS, Azure), and is developing data science skills through her Master's program. Which area would you like to explore further?";
        suggestions = ['Frontend development expertise', 'Backend technologies & frameworks', 'Database management skills', 'Cloud & DevOps experience', 'Data Science capabilities'];
        break;
      case 'experience':
        followUpText = "I can share more detailed information about Ramya's professional experience. At Autodesk (2021-2023), she led development of pricing tools, implemented database optimizations, built RESTful APIs, and mentored junior developers. She worked with cross-functional teams and contributed to the full software development lifecycle. What specific aspect would you like to know more about?";
        suggestions = ['Autodesk responsibilities & achievements', 'Technologies used professionally', 'Project management approach', 'Team collaboration experience'];
        break;
      case 'education':
        followUpText = "I can provide comprehensive details about Ramya's educational background. She's pursuing a Master's in Data Science at University of Pisa (2024-present) with coursework in advanced analytics, machine learning, and business intelligence. She completed her Bachelor's in Information Science (2016-2020) with distinction and a GPA of 8.7/10. Which degree would you like to explore further?";
        suggestions = ['Master\'s program coursework', 'Bachelor\'s degree achievements', 'Academic projects', 'Skills gained from education'];
        break;
      case 'projects':
        followUpText = "Ramya has worked on several significant projects including: 1) A comprehensive Pricing Tool Solution that improved efficiency by 40%, 2) Database Optimization that enhanced query performance by 30%, 3) This Portfolio Website showcasing her skills, and 4) E-commerce Platform Integration with multiple payment and shipping providers. Which project would you like detailed information about?";
        suggestions = ['Pricing Tool project details', 'Database Optimization specifics', 'Portfolio Website development', 'E-commerce Integration project'];
        break;
      case 'skills-frontend':
        followUpText = "In frontend development, Ramya has built responsive user interfaces with React, implemented state management solutions, created reusable component libraries, and designed mobile-first responsive layouts. She's proficient with modern JavaScript (ES6+), TypeScript for type safety, and styling solutions like Tailwind CSS. Would you like to know about specific frontend projects or techniques she's familiar with?";
        suggestions = ['Frontend project examples', 'React expertise details', 'UI/UX capabilities', 'Frontend performance optimization'];
        break;
      case 'skills-backend':
        followUpText = "Ramya's backend development expertise includes building RESTful APIs with C# and ASP.NET, implementing authentication/authorization systems, designing microservices architectures, and optimizing server-side performance. She has experience with both .NET Framework and .NET Core environments. Would you like specific examples of her backend work?";
        suggestions = ['Backend architecture approach', 'API development details', 'Authentication implementation', 'Server optimization techniques'];
        break;
      case 'project-pricing tool':
        followUpText = "For the Pricing Tool project, Ramya led development of a comprehensive solution that automated complex pricing calculations for Autodesk's global sales team. The system integrated with CRM platforms, supported multi-currency pricing, implemented complex discount rules, and provided analytics dashboards. Would you like to know more about specific aspects of this project?";
        suggestions = ['Technical architecture', 'Implementation challenges', 'Business impact', 'Technologies used'];
        break;
      default:
        // For other topics, provide a general but informative follow-up
        return {
          type: 'bot',
          text: "I have more detailed information about Ramya's skills, experience, education, and projects. What specific aspect would you like to explore further?",
          id: generateId(),
          timestamp: new Date(),
          suggestions: ['Technical skills breakdown', 'Professional achievements', 'Education details', 'Project portfolio']
        };
    }
    
    return {
      type: 'bot',
      text: followUpText,
      id: generateId(),
      timestamp: new Date(),
      suggestions
    };
  };
  
  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      type: 'user',
      text: input,
      id: generateId(),
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    
    // Add typing indicator
    const typingMessage: Message = {
      type: 'bot',
      text: '...',
      id: generateId(),
      timestamp: new Date(),
      isTyping: true
    };
    
    setMessages(prevMessages => [...prevMessages, typingMessage]);
    
    // Process the response
    const response = findResponse(input);
    
    // Update context based on the user's message
    const newContext = { ...context };
    
    // Extract user name if present
    const userName = extractUserName(input);
    if (userName) {
      newContext.userName = userName;
    }
    
    // Update sentiment
    newContext.sentiment = determineUserSentiment(input);
    
    // Simulate bot typing with a slight variable delay based on response length
    const typingDelay = Math.min(600 + response.text.length / 10, 1500);
    
    setTimeout(() => {
      // Remove typing indicator and add response
      setMessages(prevMessages => {
        const filteredMessages = prevMessages.filter(msg => !msg.isTyping);
        
        const botResponse: Message = {
          type: 'bot',
          text: response.text,
          id: generateId(),
          timestamp: new Date(),
          suggestions: response.suggestions
        };
        
        return [...filteredMessages, botResponse];
      });
      
      // Update the context
      setContext(newContext);
      
      // Add follow-up message if appropriate (with a slight delay)
      if (response.followUp) {
        setTimeout(() => {
          const followUpMessage = generateFollowUpMessage(newContext.lastTopic);
          if (followUpMessage) {
            setMessages(prevMessages => [...prevMessages, followUpMessage]);
          }
        }, 1200);
      }
    }, typingDelay);
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    handleSendMessage();
  };
  
  const provideFeedback = (isPositive: boolean) => {
    setFeedbackMessage(isPositive ? "Thank you for the positive feedback!" : "I'm sorry I couldn't help. I'll try to improve.");
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat bubble button */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-portfolioBlue to-purple-500 text-white shadow-lg hover:shadow-xl transition-all"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
      
      {/* Feedback message */}
      {feedbackMessage && (
        <div className="absolute bottom-16 right-0 mb-2 p-2 bg-white rounded-lg shadow-md text-sm animate-fade-in">
          {feedbackMessage}
        </div>
      )}
      
      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          {/* Header */}
          <div className="p-3 bg-gradient-to-r from-portfolioBlue to-purple-500 text-white">
            <h3 className="font-medium">Chat with Ramya's Assistant</h3>
            <p className="text-xs text-gray-100 mt-1">Ask me anything about Ramya's skills, experience, or education</p>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto max-h-96 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={msg.id || index}
                className={`mb-3 ${
                  msg.type === 'user' ? 'ml-auto max-w-[80%]' : 'mr-auto max-w-[80%]'
                }`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-portfolioBlue to-purple-500 text-white rounded-br-none'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.isTyping ? (
                    <div className="flex space-x-1 items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  ) : (
                    <div className="whitespace-pre-wrap">
                      {msg.text.split('\n').map((paragraph, i) => (
                        <p key={i} className={i > 0 ? 'mt-2' : ''}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Only show suggestions for bot messages */}
                {msg.type === 'bot' && msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {msg.suggestions.map((suggestion, i) => (
                      <button
                        key={i}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full border border-gray-200 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
                
                {/* Feedback buttons for bot messages (only show for substantive messages) */}
                {msg.type === 'bot' && !msg.isTyping && msg.text.length > 20 && index === messages.length - 1 && (
                  <div className="flex space-x-2 mt-1 justify-end">
                    <button 
                      onClick={() => provideFeedback(true)}
                      className="text-xs text-gray-500 hover:text-green-500 flex items-center gap-1"
                      aria-label="Helpful response"
                    >
                      <ThumbsUp size={12} />
                      <span>Helpful</span>
                    </button>
                    <button 
                      onClick={() => provideFeedback(false)}
                      className="text-xs text-gray-500 hover:text-red-500 flex items-center gap-1"
                      aria-label="Not helpful response"
                    >
                      <ThumbsDown size={12} />
                      <span>Not helpful</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
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
          
          {/* Footer with links */}
          <div className="px-3 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 flex justify-between items-center">
            <div>
              <button 
                onClick={() => setMessages(initialMessages)} 
                className="text-portfolioBlue hover:underline flex items-center gap-1"
              >
                <AlertCircle size={12} />
                <span>Reset chat</span>
              </button>
            </div>
            <div>
              <a 
                href="#contact" 
                className="text-portfolioBlue hover:underline flex items-center gap-1"
                onClick={() => setIsOpen(false)}
              >
                <ExternalLink size={12} />
                <span>Contact directly</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
