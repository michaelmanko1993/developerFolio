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
    "A passionate MLOps & Senior Backend Engineer 🚀 specializing in AI/ML infrastructure, real-time streaming systems, and high-performance computing. Experienced with Python, Go, PyTorch, Apache Kafka, AWS SageMaker, and building production-grade fraud detection platforms at scale."
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
  subTitle: "MACHINE LEARNING ENGINEER BUILDING PRODUCTION AI SYSTEMS AND SCALABLE BACKEND INFRASTRUCTURE",
  skills: [
    emoji(
      "⚡ Build production-grade ML systems using PyTorch, Hugging Face, and custom GraphSAGE architectures for fraud detection"
    ),
    emoji(
      "⚡ Design real-time feature engineering pipelines with Apache Flink, Kafka, Feast, and Redis for ultra-low-latency inference"
    ),
    emoji(
      "⚡ Optimize model serving infrastructure using Triton Inference Server and AWS SageMaker on EKS clusters"
    ),
    emoji(
      "⚡ Build high-performance backend systems in Go and Python with concurrent processing and async task delegation"
    ),
    emoji(
      "⚡ Implement RLHF workflows and automated ML evaluation frameworks for continuous model improvement"
    ),
    emoji(
      "⚡ Architect HIPAA-compliant, distributed systems with real-time fraud detection and KYC/AML compliance"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Go (Golang)",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Apache Kafka",
      fontAwesomeClassname: "fas fa-stream"
    },
    {
      skillName: "AWS SageMaker",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "AWS EKS",
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
      skillName: "Triton Inference",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Apache Flink",
      fontAwesomeClassname: "fas fa-stream"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
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
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHrhLnmmZTGjQ/company-logo_200_200/company-logo_200_200/0/1631303360671?e=1783555200&v=beta&t=xqb4ysenH7hOeGs-cpg-N7uIPyogQXU7QWLwJgnd3g8",
      subHeader: "Bachelor of Science, Computer Science",
      duration: "2013 - 2017",
      desc: "Solid foundation in computer science fundamentals, algorithms, and software engineering.",
      descBullets: [
        "Distributed systems and cloud computing",
        "Modern software development practices"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "ML/MLOps & AI Infrastructure", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Real-Time Streaming & Backend Systems",
      progressPercentage: "92%"
    },
    {
      Stack: "Full-Stack Development (React + Python/Go)",
      progressPercentage: "88%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "MLOps Engineer / Senior Software Engineer",
      company: "Plaid",
      companylogo: "https://media.licdn.com/dms/image/v2/D4E0BAQFWIYSyhHIVHg/company-logo_200_200/B4EZ7Xzu9rIAAE-/0/1781737123943/plaid__logo?e=1783555200&v=beta&t=ulrVvxcU8yWFvT4ii1gFAfTSl9VZBLiqJwRZ0xhmHMk",
      date: "August 2025 - Present",
      desc: "Leading AI/ML infrastructure and high-performance backend systems for fraud detection at scale",
      descBullets: [
        "Architected heterogeneous GNN models with PyTorch Geometric and GraphSAGE on AWS SageMaker, deploying custom architectures to significantly reduce fraud rates",
        "Engineered real-time feature pipeline using Apache Flink and Kafka, ingesting dynamic attributes into Feast and Redis for ultra-low-latency inference",
        "Built Go/Python backend system with optimized concurrency patterns (Goroutines, Channels) ensuring instant data delivery during peak traffic",
        "Deployed real-time fraud detection streaming system with Go, Kafka, and AWS MSK blocking millions in fraudulent transfers before settlement",
        "Optimized infrastructure on Amazon EKS, reduced AI cloud costs by 60% using intelligent Redis caching"
      ]
    },
    {
      role: "AI Training Engineer",
      company: "Turing",
      companylogo: "https://media.licdn.com/dms/image/v2/D4D0BAQEMzTP7ySRl1w/company-logo_200_200/B4DZraOH1PGgAI-/0/1764597727124?e=1783555200&v=beta&t=O1Zh4xwn99XZ5Ddsqrwklb9zbxZOs_vgOF4Kp0MTgSk",
      date: "March 2025 - July 2025",
      desc: "Engineered ML training pipelines and code verification infrastructure for LLM model development",
      descBullets: [
        "Built high-fidelity training pipelines in Python/SQL to extract and clean complex AWS and PostgreSQL architectural datasets",
        "Created custom code-verification sandbox using Go, Docker, and Bash for 100% logic validation before model ingestion",
        "Executed RLHF workflows in Labelbox, ranking model responses on concurrency safety and code quality standards",
        "Designed Chain-of-Thought prompting strategies for infrastructure-as-code reasoning (CloudFormation, Terraform)",
        "Increased training data throughput by 50% with automated Bash/Python scripts managing high-volume Labelbox API uploads"
      ]
    },
    {
      role: "Founding Engineer",
      company: "EPAM Systems",
      companylogo: "https://media.licdn.com/dms/image/v2/D4D0BAQGd7yeYsBtfzw/company-logo_200_200/B4DZuc0QBQH4AI-/0/1767862501956/epam_systems_logo?e=1783555200&v=beta&t=EAqXhoisS3h9vBGzrWvYG7g7yFmFBqPsVbyeaq7QjpI",
      date: "August 2024 - March 2025",
      desc: "Built full-stack sales intelligence MVP with AI-powered data enrichment and real-time analytics",
      descBullets: [
        "Developed full-stack MVP using Next.js, TypeScript, FastAPI, and Python combining SerpAPI and OpenAI for intelligent profile discovery",
        "Architected asynchronous enrichment pipeline with Celery and Redis, enabling heavy AI workloads without blocking UI interactions",
        "Engineered multi-step data ingestion with FastAPI and Pydantic, handling CSV uploads, auto-mapping, and deduplication constraints",
        "Built high-performance React/Next.js dashboard with Tailwind CSS and TanStack Query for real-time analytics and recommendations",
        "Developed cross-platform mobile app with React Native and Expo, implementing MMKV caching and Firebase Cloud Messaging"
      ]
    },
    {
      role: "Software Engineer",
      company: "CVS Health",
      companylogo: "https://media.licdn.com/dms/image/v2/C4E0BAQEhOw_KVli-CQ/company-logo_200_200/company-logo_200_200/0/1669901807779/cvs_health_logo?e=1783555200&v=beta&t=wnkD-q3z7J8n3pAw6y_Bh_LXDrzuai44u8WTZgI-n6s",
      date: "December 2017 - July 2024",
      desc: "Built HIPAA-compliant healthcare platforms serving millions of concurrent patients",
      descBullets: [
        "Developed national vaccine booking portal using React, TypeScript, Node.js with Redis slot-locking, preventing double-bookings at scale",
        "Integrated third-party EHR and Oracle Health APIs for real-time patient record synchronization across provider networks",
        "Engineered real-time prescription tracking dashboard with Python/Django, reducing support call volume significantly",
        "Optimized performance with Redux Toolkit state management, Celery async processing, and comprehensive test coverage (Pytest, Jest)",
        "Ensured HIPAA compliance managing PHI with JWT authentication, HTTPS protocols, and application-layer encryption"
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
  subtitle: "AI-POWERED FRAUD DETECTION, BACKEND SYSTEMS, AND REAL-TIME STREAMING PLATFORMS",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "GNN Fraud Detection Platform",
      projectDesc: "Graph Neural Networks with PyTorch Geometric on AWS SageMaker detecting multi-entity transaction fraud with real-time Kafka streaming",
      footerLink: [
        {
          name: "Learn More",
          url: "https://github.com/derekseber"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Real-Time Feature Engineering Pipeline",
      projectDesc: "Apache Flink + Kafka streaming system with Feast and Redis, achieving ultra-low-latency ML feature retrieval on AWS",
      footerLink: [
        {
          name: "Learn More",
          url: "https://github.com/derekseber"
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "HIPAA-Compliant Vaccine Booking Portal",
      projectDesc: "React/TypeScript/Node.js platform with distributed Redis locking handling millions of concurrent bookings during peak traffic",
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
  title: emoji("Expertise & Specializations 🏆 "),
  subtitle:
    "Deep technical expertise in ML infrastructure, fraud detection, real-time systems, and healthcare compliance",

  achievementsCards: [
    {
      title: "ML Systems & AI Infrastructure",
      subtitle:
        "Expert in PyTorch, GraphSAGE, Hugging Face Transformers, TensorRT, Triton Inference Server, and AWS SageMaker for production ML",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "ML Systems Logo",
      footerLink: [
        // {
        //   name: "Technical Stack",
        //   url: "https://github.com/derekseber"
        // }
      ]
    },
    {
      title: "Real-Time Streaming & Feature Engineering",
      subtitle:
        "Specialized in Apache Kafka, Flink, Feast, RLHF workflows, and low-latency feature serving for fraud detection at scale",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Streaming Systems Logo",
      footerLink: [
        // {
        //   name: "View Projects",
        //   url: "https://github.com/derekseber"
        // }
      ]
    },

    {
      title: "High-Performance Backend & DevOps",
      subtitle: "Expert in Go, Python backends, Kubernetes/EKS, Docker, Triton Inference, and building scalable distributed systems",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Backend Architecture Logo",
      footerLink: [
        // {
        //   name: "Infrastructure Code",
        //   url: "https://github.com/derekseber"
        // }
      ]
    },
    {
      title: "HIPAA Compliance & Healthcare Systems",
      subtitle: "Built secure healthcare platforms with PHI encryption, distributed locking, EHR integration, and HIPAA-regulated architecture",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Healthcare Systems Logo",
      footerLink: [
        // {
        //   name: "Case Study",
        //   url: "https://github.com/derekseber"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Technical Insights",
  subtitle:
    "Articles on ML systems, real-time streaming, fraud detection, and production AI infrastructure",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://github.com/derekseber",
      title: "Building Graph Neural Networks for Fraud Detection",
      description:
        "Deep dive into GNN architectures with PyTorch Geometric and GraphSAGE for real-time transaction fraud detection at scale"
    },
    {
      url: "https://github.com/derekseber",
      title: "Real-Time ML Feature Serving with Kafka and Feast",
      description:
        "Engineering ultra-low-latency feature pipelines using Apache Flink, Kafka, Feast, and Redis for production ML inference"
    },
    {
      url: "https://github.com/derekseber",
      title: "From Triton to Production: Optimizing ML Model Serving",
      description:
        "Techniques for scaling ML inference using Triton Inference Server, AWS SageMaker, and Kubernetes on EKS"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS & PRESENTATIONS",
  subtitle: emoji(
    "Sharing insights on ML systems, fraud detection, and production AI infrastructure 🎙️"
  ),

  talks: [
    {
      title: "Building Scalable ML Systems in Production",
      subtitle: "Technical Workshop on ML Ops, Real-Time Feature Engineering, and Model Serving",
      slides_url: "https://github.com/derekseber",
      event_url: "https://github.com/derekseber"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Discussions on ML engineering, fraud detection, and production AI systems",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/ML-Engineering-Stories-e9givv/a-a15itvo"
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
    "Discuss ML systems, fraud detection, backend architecture, or just want to connect? My inbox is open.",
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
