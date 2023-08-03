import { useRef } from "react";
import LiIcon from "@/components/experience/li-icon/LiIcon";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface EducationDetailsProps {
  type: string;
  time: string;
  place: string;
  info: string;
  certificate?: string;
  link?: string;
}

const EducationDetails = ({
  type,
  time,
  place,
  info,
  certificate,
  link,
}: EducationDetailsProps) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[70%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full mb-1 md:text-sm">{info}</p>
        {certificate && link && (
          <Link href={link} target={"_blank"}>
            <Image
              src={certificate}
              alt="certificate"
              width={200}
              height={100}
            />
          </Link>
        )}
        {certificate && !link && (
          <Image src={certificate} alt="certificate" width={200} height={100} />
        )}
      </motion.div>
    </li>
  );
};

export default EducationDetails;
