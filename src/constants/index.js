import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "SSIS",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Azure Dev Ops",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Java",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Blender",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Unreal Engine5",
        type: "Backend",
    }
  
];

export const experiences = [
    {
        title: "Web Developer",
        company_name: "Nur Insight",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Crafting dynamic and immersive web experiences with React.js, blending cutting-edge tech with artistic design to bring ideas to life.",
            "Joining forces with a diverse squad of visionaries—designers, product maestros, and fellow code wizards—to build digital masterpieces that leave a lasting impact.",
            "Weaving responsive design magic into every pixel, ensuring seamless adventures across every screen and browser universe.",
            "Diving into the code cosmos, sharing insights, and sprinkling constructive wisdom to elevate the craft of fellow developers during collaborative code reviews.",
        ],
    },
    {
        title: "IT Technitian",
        company_name: "Linea Directa",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Rolling up my sleeves to dive into the tangible world of tech, troubleshooting and breathing new life into devices while keeping the heartbeat of server infrastructure strong and steady.",
            "Unraveling the mysteries of hardware and software, diagnosing issues with   precision, and restoring functionality to keep the digital world running smoothly.",
            "Building and fortifying the backbone of IT systems, ensuring seamless operations and empowering teams with reliable, high-performance technology solutions.",
            
        ],
    },
    {
        title: "Data Analyst",
        company_name: "Cognodata",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Present",
        points: [
            "Unlocking the stories hidden within data, transforming raw numbers into actionable insights using the power of Microsoft SQL Server and SSIS.",
            "Architecting seamless data pipelines with SSIS, ensuring every byte flows smoothly from source to destination, ready for analysis.",
            "Crafting intricate SQL queries like a wordsmith, extracting clarity from chaos and turning databases into decision-making goldmines.",
            "Collaborating with teams to design and optimize data solutions, bridging the gap between raw data and strategic business outcomes.",
        ],
    },
   
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];