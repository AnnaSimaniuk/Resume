import LiIcon from "../li-icon/LiIcon";
import { useRef } from "react";
import { motion } from "framer-motion";

interface DetailsProps {
  position: string;
  company: string;
  companyLink: string;
  address: string;
  work: string;
  time: string;
}

const Details = ({
  position,
  company,
  companyLink,
  address,
  work,
  time,
}: DetailsProps) => {
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
          {position}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <div className="font-medium w-full md:text-sm" dangerouslySetInnerHTML={{ __html: work }}></div>
      </motion.div>
    </li>
  );
};

export default Details;
