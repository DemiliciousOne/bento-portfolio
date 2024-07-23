import React from "react";
import type { PortfolioItem } from "@utils/portfolioData";
import { motion } from "framer-motion";

interface SimplePortfolioItemProps {
  item: PortfolioItem;
}

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const SimplePortfolioItem: React.FC<SimplePortfolioItemProps> = ({ item }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="order-4 lg:order-none text-center cursor-pointer ring-1 lg:row-start-3 h-full flex p-8 dark:bg-secondary flex-col justify-start hover:ring-primary/5 dark:hover:ring-trueWhite/50 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-white shadow-xl dark:shadow-thick group"
    >
      <motion.div variants={childVariants} className="w-full">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="relative w-full pb-[56.25%] rounded-md overflow-hidden">
            <img
              src={item.featureImage}
              alt={`${item.title} Screenshot`}
              className="absolute inset-0 w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-secondary bg-opacity-70 transition-opacity duration-300 group-hover:opacity-0"></div>
          </div>
          <p className="text-xl text-primary dark:text-white lg:text-2xl mt-6">
            {item.title}
          </p>
          <p className="text-gray-600 text-sm font-light dark:text-gray-400 mt-2">
            {item.description}
          </p>
          {item.achievementIcon ? (
            <div className="flex items-center justify-center mt-2">
              <img
                src={item.achievementIcon}
                alt="Achievement Icon"
                className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2"
              />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.achievement}
              </span>
            </div>
          ) : null}

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {item.techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 dark:bg-secondary-light rounded-full px-3 py-1 text-sm font-light text-gray-700 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default SimplePortfolioItem;
