import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className = "", children }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      card.style.setProperty("--inner-hover", "1");
    };

    const handleMouseLeave = () => {
      card.style.setProperty("--inner-hover", "0");
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

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

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      ref={cardRef}
      className={`card relative overflow-hidden ring-1 dark:ring-white/10 ${className}`}
    >
      <motion.div variants={childVariants}>
        <div
          className="hidden lg:block absolute inset-0 transition-opacity duration-500 rounded-inherit z-3"
          style={{
            background:
              "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.5), transparent 40%)",
            opacity: "var(--hover)",
          }}
        />
        <div className="card-content flex grow dark:bg-secondary relative lg:absolute inset-px z-2 rounded-3xl">
          <div
            className="hidden lg:block absolute inset-0 transition-opacity duration-500 rounded-inherit z-3"
            style={{
              background:
                "radial-gradient(600px at var(--mouse-x) var(--mouse-y), rgba(93, 93, 155, 0.04), transparent 80%)",
              opacity: "var(--inner-hover, 0)",
            }}
          />
          <div
            className="hidden lg:block absolute inset-0 transition-opacity duration-500 rounded-inherit z-1"
            style={{
              background:
                "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(93, 93, 155, 0.15), transparent 80%)",
              opacity: "var(--inner-hover, 0)",
            }}
          />
          <div className="relative lg:p-8">{children}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
