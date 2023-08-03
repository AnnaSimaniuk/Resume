import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { educationData } from "./data";
import EducationDetails from "@/components/education/education-details/EducationDetails";
import DanItCertificate from "../../../public/image/DANIT_Certificate.png";
import UdemyCertificate from "../../../public/image/TS_Udemy.jpg";

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const renderOptions = () => {
    return educationData.map((education) => {
      if (education.place === "Dan.IT Education") {
        return (
          <EducationDetails
            {...education}
            key={education.id}
            certificate={DanItCertificate}
          />
        );
      } else if (education.place === "Udemy") {
        return (
          <EducationDetails
            {...education}
            key={education.id}
            certificate={UdemyCertificate}
          />
        );
      } else {
        return <EducationDetails {...education} key={education.id} />;
      }
    });
  };

  return (
    <div className="my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {renderOptions()}
        </ul>
      </div>
    </div>
  );
};

export default Education;
