/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Derek Seber",
  title: "Hi all, I'm Derek",
  subTitle: emoji(
    "A passionate Senior Software Engineer 🚀 specializing in backend systems, AI/ML infrastructure, and high-performance computing. Experienced with Go, Python, TypeScript, and building scalable cloud-native applications on AWS with Kubernetes, Redis, Kafka, and modern DevOps practices."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/derekseber",
  linkedin: "https://www.linkedin.com/in/derek-s-495439129/",
  gmail: "djseber3@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "HIGH-PERFORMANCE BACKEND ENGINEER WHO LOVES BUILDING SCALABLE SYSTEMS AND AI INFRASTRUCTURE",
  skills: [
    emoji(
      "⚡ Build high-speed, low-latency backend systems using Go, Python, and Node.js with concurrent processing patterns"
    ),
    emoji(
      "⚡ Design and optimize AI/ML data pipelines with TensorRT, ONNX Runtime, and vector databases (Milvus, Redis)"
    ),
    emoji(
      "⚡ Architect cloud-native applications on AWS (EKS, EC2, S3, MSK) with Kubernetes, Docker, and Terraform"
    ),
    emoji(
      "⚡ Implement real-time streaming systems using Apache Kafka, confluent-kafka-go, and event-driven architectures"
    ),
    emoji(
      "⚡ Develop full-stack applications combining React/TypeScript frontends with FastAPI/Django backends"
    ),
    emoji(
      "⚡ Build distributed systems with caching (Redis Enterprise, Milvus), message queues (RabbitMQ, Celery), and async processing"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Go (Golang)",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SQL / PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fas fa-stream"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Maryland College Park",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Science, Computer Science",
      duration: "2013 - 2017",
      desc: "Graduated with a strong foundation in computer science fundamentals, data structures, algorithms, and software engineering principles.",
      descBullets: [
        "Developed comprehensive understanding of distributed systems and cloud computing",
        "Participated in software development projects using modern programming languages and frameworks"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend / Cloud Infrastructure", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Full-Stack (React + Node/FastAPI)",
      progressPercentage: "85%"
    },
    {
      Stack: "AI/ML Systems & Data Pipelines",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Plaid",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "August 2025 - Present",
      desc: "Leading high-performance backend systems and AI infrastructure development",
      descBullets: [
        "Built high-speed bank data enrichment system using Go, Python, and FastAPI with optimized concurrency patterns (Goroutines, Channels, Sync.Pool)",
        "Cut external AI cloud fees by 60% using Redis Enterprise and Milvus Vector Database for intelligent memory caching layer",
        "Accelerated AI data analysis on AWS EC2 G5 GPU servers via TensorRT INT8 quantization and NVIDIA Triton Inference Server",
        "Protected client applications from AI outages using go-resiliency circuit breakers and automated safety switches",
        "Improved app responsiveness by building asynchronous task delegation network using Celery, Gunicorn, and RabbitMQ",
        "Blocked millions in fraudulent transfers with real-time risk alert streaming system using Go, Kafka, and AWS MSK",
        "Optimized microservice communications by shifting from REST/JSON to high-performance gRPC and Protocol Buffers",
        "Deployed system onto Amazon EKS using Docker containers and Terraform with automatic scaling based on Prometheus/Grafana"
      ]
    },
    {
      role: "AI Engineer",
      company: "Turing",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "March 2025 - July 2025",
      desc: "Engineered advanced AI training pipelines and model verification infrastructure",
      descBullets: [
        "Engineered high-fidelity training pipelines using Python and SQL to extract complex architectural datasets",
        "Debugged hundreds of C++ training prompts ensuring LLM correctness with STL containers and C++20 standards",
        "Implemented custom code-verification sandbox using Go, Docker, and Bash for 100% logic validation before ingestion",
        "Executed advanced RLHF workflows within Labelbox, ranking model responses on concurrency safety and code standards",
        "Designed Chain-of-Thought prompting strategies for AWS CloudFormation, Terraform, and security group configurations",
        "Optimized backend model performance using SQL gap analysis on training datasets",
        "Integrated automated vulnerability scanning within training loop using Python security libraries for OWASP Top 10"
      ]
    },
    {
      role: "Founding Engineer",
      company: "EPAM Systems",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "August 2024 - March 2025",
      desc: "Built full-stack sales intelligence MVP with AI-powered data enrichment",
      descBullets: [
        "Built full-stack MVP using Next.js, TypeScript, FastAPI, and Python for automated background profile discovery",
        "Architected asynchronous data enrichment pipeline using Celery and Redis for heavy AI workloads",
        "Engineered multi-step data ingestion system using FastAPI and Pydantic with CSV file uploads and auto-deduplication",
        "Implemented public data discovery combining SerpAPI and OpenAI API for web scraping and profile extraction",
        "Enforced data reliability using OpenAI Structured Outputs with Pydantic and confidence scoring",
        "Designed custom PostgreSQL ranking algorithm for location alignment and executive seniority filtering",
        "Developed high-performance React/Next.js dashboard with Tailwind CSS and interactive analytics grids",
        "Built cross-platform mobile app using React Native, TypeScript, and Expo with MMKV storage and Firebase FCM"
      ]
    },
    {
      role: "Software Engineer",
      company: "CVS Health",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "December 2017 - July 2024",
      desc: "Built HIPAA-compliant healthcare platforms serving millions of patients",
      descBullets: [
        "Built high-concurrency, HIPAA-compliant national vaccine booking portal using React, TypeScript, Node.js, and Express",
        "Prevented appointment double-booking with distributed atomic slot-locking mechanisms using Redis",
        "Accelerated patient checkout by optimizing client-side state with Redux Toolkit and Zod validation",
        "Engineered real-time mail-order prescription tracking dashboard using Python, Django REST Framework, and React",
        "Decoupled legacy mainframe lookups by building asynchronous data fetching pipeline using Celery and Redis",
        "Standardized responsive UIs using Tailwind CSS achieving accessibility standards across all devices",
        "Ensured platform stability with comprehensive automated testing (Pytest, Jest, React Testing Library)",
        "Protected patient PHI using JWT tokens, HTTPS protocols, and application-layer encryption"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "HIGH-PERFORMANCE SYSTEMS AND AI-POWERED APPLICATIONS",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Bank Data Enrichment System",
      projectDesc: "High-speed Go/Python system processing real-time bank data with Redis caching, Milvus vectors, and Kafka streaming for fraud detection",
      footerLink: [
        {
          name: "Learn More",
          url: "https://github.com/derekseber"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Sales Intelligence Platform",
      projectDesc: "Full-stack Next.js + FastAPI MVP with AI-powered profile enrichment, SerpAPI scraping, and real-time analytics dashboard",
      footerLink: [
        {
          name: "Learn More",
          url: "https://github.com/derekseber"
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "National Vaccine Booking Portal",
      projectDesc: "HIPAA-compliant React/Node.js platform with distributed Redis slot-locking, handling millions of concurrent patient appointments",
      footerLink: [
        {
          name: "Learn More",
          url: "https://github.com/derekseber"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Expertise 🏆 "),
  subtitle:
    "Accomplishments, technical expertise, and specialized knowledge in backend systems and cloud infrastructure",

  achievementsCards: [
    {
      title: "AI/ML Infrastructure Specialist",
      subtitle:
        "Expert in building production-grade AI inference systems with TensorRT, ONNX Runtime, and vector databases (Milvus, Redis)",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "AI/ML Logo",
      footerLink: [
        {
          name: "Technical Stack",
          url: "https://github.com/derekseber"
        }
      ]
    },
    {
      title: "Distributed Systems & Event Streaming",
      subtitle:
        "Specialized in Apache Kafka, confluent-kafka-go, and real-time streaming systems for fraud detection and risk assessment",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Distributed Systems Logo",
      footerLink: [
        {
          name: "View Projects",
          url: "https://github.com/derekseber"
        }
      ]
    },

    {
      title: "Cloud-Native & DevOps",
      subtitle: "Expert in AWS (EKS, EC2, MSK, S3), Kubernetes, Docker, Terraform, and automated infrastructure scaling",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Cloud-Native Logo",
      footerLink: [
        {
          name: "Infrastructure Code",
          url: "https://github.com/derekseber"
        }
      ]
    },
    {
      title: "HIPAA-Compliant Healthcare Systems",
      subtitle: "Built secure, scalable healthcare platforms handling sensitive PHI with JWT, HTTPS encryption, and distributed locking",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Healthcare Systems Logo",
      footerLink: [
        {
          name: "Case Study",
          url: "https://github.com/derekseber"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Technical Insights",
  subtitle:
    "Articles and insights on backend systems, AI/ML infrastructure, and distributed computing",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://github.com/derekseber",
      title: "Building High-Performance Go Systems",
      description:
        "Deep dive into Go concurrency patterns, Goroutines, Channels, and optimization techniques for production systems"
    },
    {
      url: "https://github.com/derekseber",
      title: "Real-Time Streaming with Apache Kafka",
      description:
        "Designing and implementing fault-tolerant Kafka systems for fraud detection and event-driven architectures"
    },
    {
      url: "https://github.com/derekseber",
      title: "AI Inference Optimization at Scale",
      description:
        "Techniques for optimizing ML model inference using TensorRT, ONNX Runtime, and Triton Inference Server"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS & PRESENTATIONS",
  subtitle: emoji(
    "I enjoy sharing technical insights on backend systems, cloud infrastructure, and AI/ML engineering 🎙️"
  ),

  talks: [
    {
      title: "Building Scalable Backend Systems with Go",
      subtitle: "Technical Workshop on Concurrency and Performance Optimization",
      slides_url: "https://github.com/derekseber",
      event_url: "https://github.com/derekseber"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Discussions on backend engineering, distributed systems, and AI infrastructure",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/Backend-Engineering-Stories-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss backend systems, AI infrastructure, cloud architecture, or just want to connect? My inbox is open for all.",
  number: "(215) 853-6927",
  email_address: "djseber3@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "derekseber", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
