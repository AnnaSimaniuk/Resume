import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CustomIconProps {
  children: ReactNode;
  href: string;
  className?: string;
}
const CustomIcon = ({ children, href, className = "" }: CustomIconProps) => {
  return (
    <motion.a
      href={href}
      target={"_blank"}
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

export default CustomIcon;
