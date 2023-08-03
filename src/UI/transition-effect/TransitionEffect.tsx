import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        style={{ width: "100vw", backgroundColor: "#B63E96", zIndex: 30 }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen bg-primary"
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        style={{ width: "100vw", backgroundColor: "#f5f5f5", zIndex: 20 }}
        className="fixed top-0 bottom-0 right-full h-screen"
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div
        style={{ width: "100vw", backgroundColor: "#1b1b1b", zIndex: 10 }}
        className="fixed top-0 bottom-0 right-full h-screen"
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
      />
    </>
  );
};

export default TransitionEffect;
