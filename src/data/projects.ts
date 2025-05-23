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
import Emate from '../../public/projects/emate.jpg'
import RealTalk from '../../public/projects/realtalk.jpg'
import StarGraze from '../../public/projects/stargraze.jpg'
import Serena from '../../public/projects/serena.jpg'
import Luminos from '../../public/projects/luminos.png'
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
      color: "from-blue-400/20 to-blue-600/20",
      size: "large"
    },
    {
      title: "CAFE-MR.KING - E-COMMERCE PLATFORM",
      description: "Presenting MR. KING CAFE: My MERN project exemplifying Full-Stack expertise. This platform boasts a user-friendly interface with React, Node.js, and MongoDB, enhanced by Tailwind CSS. Users can log in, explore menus, add to carts, and pay securely via Stripe. JWT ensures authentication, while an admin dashboard simplifies menu and user management.",
      image: MrKing,
      github: "https://github.com/SarangaSiriwardhana9/Cafe_MRKing",
      tags: ["MERN", "React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe", "JWT"],
      category: "E-Commerce",
      color: "from-yellow-400/20 to-yellow-400/20",
      size: "large"
    },
   
    {
      title: "Codewave - Interactive Programming Assistant Tool",
      description: "Codewave is an interactive programming assistance tool designed to support first-year Information Technology students in their learning journey. It provides a dynamic virtual lab environment, automated guidelines, and real-time collaboration to empower students in navigating coding exercises at their own pace.",
      image: codewave,
      github: "https://github.com/SarangaSiriwardhana9/CodeWave",
      tags: ["Zegocloud ", "MERN", "MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS" ],
      category: "Education",
      color: "from-blue-400/40 to-blue-600/50",
      size: "large"
    },
    {
      title: "E-MATE - E-COMMERCE Mobile App",
      description: "E mate is a Android application, enabling customers to browse products, place orders, track order status, and rate vendors. The application communicates with a .NET backend hosted on IIS, following a client-server architecture designed to support real-time customer engagement and streamlined order management",
      image: Emate,
      github: "https://github.com/SarangaSiriwardhana9/EAD-E_commerce_App",
      tags: ["Kotlin", "Android SDK",  "Retrofit"],
      category: "Mobile App",
      color: "from-yellow-500/20 to-orange-500/20",
      size: "large"
    },
    {
      title: "StateLk - Real Estate Platform",
      description: "StateLk is a comprehensive real estate platform designed for the Sri Lankan market. It offers a user-friendly interface for buying and selling homes and lands. Users can easily add property listings, view property details, and contact sellers. The platform aims to simplify the property search process and enhance the overall experience for both buyers and sellers in Sri Lanka.",
      image: StateLk,
      github: "https://github.com/SarangaSiriwardhana9/StateLK--MERN_Full_Stack_Estate_Marketplace",
      tags: ["MERN", "React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js","JWT", "Firebase Authentication","Firebase Storage"],
      category: "E-Commerce",
      color: "from-cyan-500/20 to-cyan-500/20",
      size: "large"
    },
       {
      title: "Luminous Moments - Photography Portfolio",
      description: "A modern, responsive photography portfolio website built with Next.js 14, showcasing professional photography services across Sri Lanka. The platform features a beautiful UI with optimized image loading, smooth animations, and a seamless user experience.",
      image: Luminos,
      github: "https://github.com/SarangaSiriwardhana9/Luminous_Moments-Photography-Portfolio",
      tags: ["NextJs", "Tailwind CSS", "Typescript","Shadcn UI"],
      category: "Mini Projects",
      color: "from-orange-200/20 to-orange-500/20",
      size: "small"
    },
    {
      title: "KeepIt - Book Marketplace Mobile App",
      description: "This mobile app project is designed to create a user-friendly and efficient platform for buying and selling books in a peer-to-peer (C2C) fashion. It offers a seamless experience for book enthusiasts who want to trade, purchase, or sell their pre-owned books.",
      image: keepIt,
      github: "https://github.com/SarangaSiriwardhana9/KeepIt",
      tags: [ "React Native", "Node.js","MongoDB", "JWT","Firebase"],
      category: "Mobile App",
      color: "from-green-800/20 to-green-500/20",
      size: "large"
    },
    {
      title: "Real Talk - Real-time Chat Application",
      description: "Real Talk is a real-time chat application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to sign up, sign in, and chat with other users in real time. The app utilizes Vite as a build tool, Socket.IO for real-time communication, Daisy UI for styling, JWT for authentication, and Tailwind CSS for UI components. The app is deployed on Render",
      image: RealTalk,
      github: "https://github.com/SarangaSiriwardhana9/RealTalk-Real-Time-Chat-App",
      tags: ["Socket.IO","Vite ","MERN", "Express.js,", "React", "Node.js", "Tailwind CSS"],
      category: "Communication",
      color: "from-blue-900/40 to-blue-900/40",
      size: "medium"
    },
    {
      title: "StarGaze  - astronomy-themed web application",
      description: "StarGaze is an astronomy-themed web application that allows users to explore the wonders of the universe through daily astronomy news, breathtaking images, and insightful articles. Powered by NASA's APIs, StarGaze offers a glimpse into the cosmos, making astronomy accessible and engaging for all",
      image: StarGraze,
      github: "https://github.com/SarangaSiriwardhana9/StarGraze",
      tags: [ "MERN","NASA API","Firebase Authentication","Jest", "Express.js,", "React", "Node.js", "Tailwind CSS"],
      category: "Mini Projects",
      color: "from-gray-800/20 to-gray-600/40",
      size: "medium"
    },
    {
      title: "SriChat - Next.js ChatGPT Clone",
      description: "SriChat is a clone of the ChatGPT application built using Next.js. It leverages Firebase for real-time chat functionality and integrates the OpenAI API for natural language processing. SriChat provides users with a seamless chat experience, enabling them to communicate effectively in real-time.",
      image: SriChat,
      github: "https://github.com/SarangaSiriwardhana9/SriChat-ChatGtp-clone",
      tags: ["Next.js", "OpenAI", "Firebase", "AI", "Chat"],
      category: "Communication",
      color: "from-neutral-800/20 to-neutral-600/20",
      size: "medium"
    },
  
    {
      title: "Serena Lanka Travels - Travel Agency Website",
      description: "Serena Lanka Travels is a React-based website for a travel agency offering tours and packages in Sri Lanka. The website provides information about the company, its services, tours, and allows users to contact the agency for inquiries and bookings.",
      image: Serena,
      github: "https://github.com/SarangaSiriwardhana9/Serena-Lanka-Travels--React-Website",
      tags: ["React", "Tailwind CSS", "React Router"],
      category: "Mini Projects",
      color: "from-blue-200/20 to-blue-500/20",
      size: "small"
    },
    {
      title: "BuildHub - Procurement Management System",
      description: "Here we addressing the challenges associated with procurement processes within the construction industry. To tackle these issues, we have developed a web application and a mobile app. My contribution is centered on the mobile application, which is created using technologies like React-Native, NodeJS, ExpressJS, and MongoDB",
      image: buildHub,
      github: "https://github.com/SarangaSiriwardhana9/-Procurement-for-Construction-Industry-",
      tags: ["React Native", "Node.js", "MongoDB"],
      category: "Mobile App",
      color: "from-yellow-400/20 to-yellow-500/20",
      size: "medium"
    },
    {
      title: "Restaurant Management System",
      description: "Restaurant Management System Using MERN Stack, this project involves developing a computerized system for Nugasewana restaurant that can streamline its operations, automate processes, and provide a better experience for customers and employees with a proper UI.",
      image: projectOne,
      github: "https://github.com/SarangaSiriwardhana9/Mern-Stack-Restaurant-Management-System-Using",
      tags: ["MERN", "React", "Node.js", "MongoDB", "Express.js","Jwt", "Tailwind CSS"],
      category: "E-Commerce",
      color: "from-orange-600/20 to-orange-500/20",
      size: "large"
    },
    {
      title: "Full-Stack-MERN-Auth-project",
      description: "MERN Auth is a lightweight full-stack web application with user authentication, protected routes, and image uploads. Built using MongoDB, Express.js, React, and Node.js, it offers a simple yet powerful solution for implementing authentication in your projects.",
      image: Auth,
      github: "https://github.com/SarangaSiriwardhana9/Full-Stack-MERN-Auth-project",
      tags: ["MERN","React","Node","Express", "Firebase", "JWT", "Security"],
      category: "Mini Projects",
      color: "from-teal-500/40 to-teal-500/20",
      size: "medium"
    },

    {
      title: "Idea Vault - Notes Keeping Web Application",
      description: "Idea Vault is a note-keeping web application designed to help users organize their thoughts, ideas, and tasks. Users can create, update, and delete notes, as well as pin notes for easy access and search for notes. The application provides a user-friendly interface and is built with Vite, Node.js, Express, MongoDB, and Firebase for authentication and image storage.",
      image: note,
      github: "https://github.com/SarangaSiriwardhana9/IdeaVault-MERN_Full_Stack_Notes_APP?tab=readme-ov-file",
      tags: ["MERN", "React","Express", "Node js", "Firebase", "Vite" ,"Tailwind"],
      category: "Mini Projects",
      color: "from-yellow-600/10 to-yellow-500/20",
      size: "large"
    },
    {
      title: "Student Management System",
      description: "This is a full-stack web application built on the MERN (MongoDB, Express, React, Node.js ) stack, designed to manage student information. It includes basic CRUD (Create, Read, Update, Delete) operations, search and filtering functionality, and the ability to upload student images.",
      image: projectThree,
      github: "https://github.com/SarangaSiriwardhana9/Student-Management-System-Using-MERN-STACK",
      tags: ["MERN","React", "Node.js", "MongoDB", "Express.js","Jwt", "Tailwind CSS"],  
      category: "Mini Projects",
      color: "from-purple-500/20 to-purple-500/20",
      size: "medium"
    },
  ]