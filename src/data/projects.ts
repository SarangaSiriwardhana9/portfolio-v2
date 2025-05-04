/* eslint-disable @typescript-eslint/no-explicit-any */
 
import Auth from '../../public/projects/auth.png.jpg'
import buildHub from '../../public/projects/buildHub.jpg'
import codewave from '../../public/projects/codewave1.jpg'
import keepIt from '../../public/projects/keepIt.jpg'
import MrKing from '../../public/projects/mrKing.jpg'
import note from '../../public/projects/note.jpg'
import projectOne from '../../public/projects/projectOne.jpg'
import projectThree from '../../public/projects/projectThree.jpg'
import SriChat from '../../public/projects/srichat.jpg'
import StateLk from '../../public/projects/statelk.jpg'
import Edupulse from '../../public/projects/edupulse.jpg'

export interface Project {
    title: string;
    description: string;
    image: any;
    github: string;
    demo?: string;
    tags: string[];
    category: string;
    color: string;
    size: 'small' | 'medium' | 'large';
  }
  
  // Project data
  export const projects: Project[] = [

    {
      title: "EduPulse-Online Learning Management System With Microservices Architecture",
      description: "EduPulse is a modern e-learning platform designed to enhance online education through a microservices architecture. The platform provides a seamless interface for learners to browse, enroll in, and access courses, while offering robust tools for instructors and administrators to manage course content and student progress.",
      image: Edupulse,
      github: "https://github.com/SarangaSiriwardhana9/EduPulse-Microservices-EducationPlatform",
      tags: ["MERN", "microservices","React","docker", "Node.js", "MongoDB", "Tailwind CSS", "Stripe", "JWT"],
      category: "Education",
      color: "from-blue-500/20 to-purple-500/20",
      size: "large"
    },
    {
      title: "CAFE-MR.KING - E-COMMERCE PLATFORM",
      description: "Presenting MR. KING CAFE: My MERN project exemplifying Full-Stack expertise. This platform boasts a user-friendly interface with React, Node.js, and MongoDB, enhanced by Tailwind CSS. Users can log in, explore menus, add to carts, and pay securely via Stripe. JWT ensures authentication, while an admin dashboard simplifies menu and user management.",
      image: MrKing,
      github: "https://github.com/SarangaSiriwardhana9/Cafe_MRKing",
      tags: ["MERN", "React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe", "JWT"],
      category: "E-Commerce",
      color: "from-blue-500/20 to-purple-500/20",
      size: "large"
    },
    {
      title: "Codewave - Interactive Programming Assistant Tool",
      description: "Codewave is an interactive programming assistance tool designed to support first-year Information Technology students in their learning journey. It provides a dynamic virtual lab environment, automated guidelines, and real-time collaboration to empower students in navigating coding exercises at their own pace.",
      image: codewave,
      github: "https://github.com/SarangaSiriwardhana9/CodeWave",
      tags: ["Educational", "Virtual Lab", "Collaboration", "Programming"],
      category: "Education",
      color: "from-green-500/20 to-teal-500/20",
      size: "medium"
    },
    {
      title: "KeepIt - Book Marketplace Mobile App",
      description: "This mobile app project is designed to create a user-friendly and efficient platform for buying and selling books in a peer-to-peer (C2C) fashion. It offers a seamless experience for book enthusiasts who want to trade, purchase, or sell their pre-owned books.",
      image: keepIt,
      github: "https://github.com/SarangaSiriwardhana9/KeepIt",
      tags: ["Mobile", "React Native", "Marketplace", "P2P"],
      category: "Mobile App",
      color: "from-purple-500/20 to-pink-500/20",
      size: "medium"
    },
    {
      title: "StateLk - Real Estate Platform",
      description: "StateLk is a comprehensive real estate platform designed for the Sri Lankan market. It offers a user-friendly interface for buying and selling homes and lands. Users can easily add property listings, view property details, and contact sellers. The platform aims to simplify the property search process and enhance the overall experience for both buyers and sellers in Sri Lanka.",
      image: StateLk,
      github: "https://github.com/SarangaSiriwardhana9/StateLK--MERN_Full_Stack_Estate_Marketplace",
      tags: ["MERN", "Real Estate", "Marketplace", "Sri Lanka"],
      category: "E-Commerce",
      color: "from-orange-500/20 to-red-500/20",
      size: "large"
    },
    {
      title: "SriChat - Next.js ChatGPT Clone",
      description: "SriChat is a clone of the ChatGPT application built using Next.js. It leverages Firebase for real-time chat functionality and integrates the OpenAI API for natural language processing. SriChat provides users with a seamless chat experience, enabling them to communicate effectively in real-time.",
      image: SriChat,
      github: "https://github.com/SarangaSiriwardhana9/SriChat-ChatGtp-clone",
      tags: ["Next.js", "OpenAI", "Firebase", "AI", "Chat"],
      category: "Communication",
      color: "from-cyan-500/20 to-blue-500/20",
      size: "small"
    },
    {
      title: "BuildHub - Procurement Management System",
      description: "Here we addressing the challenges associated with procurement processes within the construction industry. To tackle these issues, we have developed a web application and a mobile app. My contribution is centered on the mobile application, which is created using technologies like React-Native, NodeJS, ExpressJS, and MongoDB",
      image: buildHub,
      github: "https://github.com/SarangaSiriwardhana9/-Procurement-for-Construction-Industry-",
      tags: ["React Native", "Node.js", "MongoDB", "Construction", "Enterprise"],
      category: "Mobile App",
      color: "from-yellow-500/20 to-orange-500/20",
      size: "small"
    },
    {
      title: "Restaurant Management System",
      description: "Restaurant Management System Using MERN Stack, this project involves developing a computerized system for Nugasewana restaurant that can streamline its operations, automate processes, and provide a better experience for customers and employees with a proper UI.",
      image: projectOne,
      github: "https://github.com/SarangaSiriwardhana9/Mern-Stack-Restaurant-Management-System-Using",
      tags: ["MERN", "Restaurant", "POS", "Management"],
      category: "E-Commerce",
      color: "from-red-500/20 to-pink-500/20",
      size: "medium"
    },
    {
      title: "Full-Stack-MERN-Auth-project",
      description: "MERN Auth is a lightweight full-stack web application with user authentication, protected routes, and image uploads. Built using MongoDB, Express.js, React, and Node.js, it offers a simple yet powerful solution for implementing authentication in your projects.",
      image: Auth,
      github: "https://github.com/SarangaSiriwardhana9/Full-Stack-MERN-Auth-project",
      tags: ["MERN", "Authentication", "JWT", "Security"],
      category: "Mini Projects",
      color: "from-indigo-500/20 to-purple-500/20",
      size: "small"
    },
    {
      title: "Student Management System",
      description: "Excited to share my capstone project as part of the Trainee Full-Stack Developer Programme offered by the UOM. This project focuses on developing an efficient information management system for a school. Leveraging cutting-edge technologies, I utilized Angular for the frontend, and for the backend.",
      image: projectThree,
      github: "https://github.com/SarangaSiriwardhana9/UOM-Capstone-Project---Trainee-Full-Stack-Developer-Program",
      tags: ["Angular", "School Management", "Education", "Enterprise"],
      category: "Education",
      color: "from-rose-500/20 to-orange-500/20",
      size: "medium"
    },
    {
      title: "Idea Vault - Notes Keeping Web Application",
      description: "Idea Vault is a note-keeping web application designed to help users organize their thoughts, ideas, and tasks. Users can create, update, and delete notes, as well as pin notes for easy access and search for notes. The application provides a user-friendly interface and is built with Vite, Node.js, Express, MongoDB, and Firebase for authentication and image storage.",
      image: note,
      github: "https://github.com/SarangaSiriwardhana9/IdeaVault-MERN_Full_Stack_Notes_APP?tab=readme-ov-file",
      tags: ["MERN", "Notes", "Firebase", "Vite"],
      category: "Mini Projects",
      color: "from-teal-500/20 to-green-500/20",
      size: "large"
    }
  ]