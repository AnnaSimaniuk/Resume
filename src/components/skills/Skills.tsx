import { motion } from "framer-motion";
import Skill from "@/components/skills/skill/Skill";

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-32 w-full text-center md:mt-16 md:text-6xl">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] sx:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name={"HTML"} x={"-22vw"} y={"2vw"} />
        <Skill name={"CSS"} x={"-5vw"} y={"-8vw"} />
        <Skill name={"Javascript"} x={"20vw"} y={"6vw"} />
        <Skill name={"React"} x={"0vw"} y={"12vw"} />
        <Skill name={"Redux"} x={"-20vw"} y={"-12vw"} />
        <Skill name={"Figma"} x={"15vw"} y={"-15vw"} />
        <Skill name={"Scss"} x={"34vw"} y={"-5vw"} />
        <Skill name={"Typescript"} x={"0vw"} y={"-20vw"} />
        <Skill name={"MUI"} x={"-25vw"} y={"-18vw"} />
        <Skill name={"Bootstrap"} x={"18vw"} y={"18vw"} />
        <Skill name={"Next JS"} x={"29vw"} y={"-15vw"} />
        <Skill name={"TailwindCSS"} x={"-35vw"} y={"7vw"} />
        <Skill name={"Qwik"} x={"-17vw"} y={"18vw"} />
      </div>
    </>
  );
};

export default Skills;
