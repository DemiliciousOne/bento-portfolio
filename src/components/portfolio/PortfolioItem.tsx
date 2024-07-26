// PortfolioItem.tsx
import React, { useState, useEffect } from "react";
import careerVaultLogo from "@assets/career-vault-logo.svg";
import { motion, AnimatePresence } from "framer-motion";

const PortfolioItem: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [circleSize, setCircleSize] = useState("100%");

  useEffect(() => {
    const calculateCircleSize = () => {
      if (typeof window !== "undefined") {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const distance = Math.hypot(
          Math.max(clickPosition.x, screenWidth - clickPosition.x),
          Math.max(clickPosition.y, screenHeight - clickPosition.y)
        );
        const size = Math.ceil(
          (distance / Math.min(screenWidth, screenHeight)) * 100
        );
        setCircleSize(`${size}%`);
      }
    };

    calculateCircleSize();
    window.addEventListener("resize", calculateCircleSize);

    return () => {
      window.removeEventListener("resize", calculateCircleSize);
    };
  }, [clickPosition]);

  const toggleOpen = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const x = event.clientX;
    const y = event.clientY;
    setClickPosition({ x, y });
    setIsOpen(!isOpen);
  };

  const expandingCircle = {
    hidden: {
      clipPath: `circle(0% at ${clickPosition.x}px ${clickPosition.y}px)`,
    },
    visible: {
      clipPath: `circle(${circleSize} at ${clickPosition.x}px ${clickPosition.y}px)`,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      clipPath: `circle(0% at ${clickPosition.x}px ${clickPosition.y}px)`,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      <div
        className="project-link cursor-pointer ring-1 lg:row-start-3 items-center h-full flex p-8 dark:bg-secondary flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/50 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-white shadow-xl dark:shadow-thick"
        onClick={toggleOpen}
      >
        <img
          src="path/to/website-screenshot.png"
          alt="Website Screenshot"
          className="w-full h-48 object-cover"
        />
        <p className="text-xl text-primary dark:text-white lg:text-2xl mt-6">
          Career Vault
        </p>
        <p className="text-gray-600 text-sm font-light dark:text-gray-400 mt-2">
          A brief description of the project goes here.
        </p>
        <div className="flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            50k monthly visitors
          </span>
        </div>
        <div className="flex space-x-2 mt-4">
          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm text-gray-700 dark:text-gray-200 mb-2">
            SolidJS
          </span>
          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm text-gray-700 dark:text-gray-200 mb-2">
            TypeScript
          </span>
          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm text-gray-700 dark:text-gray-200 mb-2">
            Astro
          </span>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={expandingCircle}
            className="fixed inset-0 bg-white dark:bg-secondary z-50 overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto py-12 px-6">
              <button
                className="absolute top-4 right-4 text-primary dark:text-white text-2xl"
                onClick={toggleOpen}
              >
                &times;
              </button>
              <h2 className="text-4xl font-bold text-primary dark:text-white mb-6">
                Career Vault
              </h2>
              <div className="mb-8">
                <a
                  href="https://careervault.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-primary dark:text-white underline hover:text-secondary dark:hover:text-gray-300 mr-4"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Visit Project
                </a>
                <a
                  href="https://github.com/username/career-vault"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-primary dark:text-white underline hover:text-secondary dark:hover:text-gray-300 mr-4"
                >
                  <i className="fab fa-github mr-2"></i>
                  Source Code
                </a>
                <a
                  href="https://figma.com/file/abcdefg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-primary dark:text-white underline hover:text-secondary dark:hover:text-gray-300"
                >
                  <i className="fab fa-figma mr-2"></i>
                  Figma File
                </a>
              </div>
              <p className="text-lg text-primary dark:text-white mb-4">
                Career Vault is a web application that helps job seekers manage
                their job applications and track their progress. It provides a
                centralized platform to store and organize job applications,
                resumes, and cover letters.
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-lg text-primary dark:text-white mb-2">
                  User-friendly dashboard to view and manage job applications
                </li>
                <li className="text-lg text-primary dark:text-white mb-2">
                  Secure storage for resumes and cover letters
                </li>
                <li className="text-lg text-primary dark:text-white mb-2">
                  Integration with popular job boards and LinkedIn
                </li>
                <li className="text-lg text-primary dark:text-white">
                  Interview scheduling and reminder system
                </li>
              </ul>
              <div className="mb-8">
                <img
                  src="/screenshots/career-vault-dashboard.png"
                  alt="Career Vault Dashboard"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-2">
                  Dashboard screen of Career Vault
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <img
                  src="/logos/career-vault-logo.png"
                  alt="Career Vault Logo"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src="/logos/career-vault-icon.png"
                  alt="Career Vault Icon"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <p className="text-lg text-primary dark:text-white mb-4">
                The project was developed using React, Node.js, and MongoDB. It
                follows a responsive design approach, ensuring optimal viewing
                experience across different devices.
              </p>
              <p className="text-lg text-primary dark:text-white">
                Career Vault aims to simplify the job application process and
                help job seekers stay organized and focused in their job search
                journey.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioItem;
