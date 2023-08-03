import { CircularText } from "@/UI/icons/Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 top-20 flex items-center justify-center overflow-hidden lg:right-8 lg:left-auto lg:top-0 lg:bottom-auto lg:absolute sm:right-0">
      <div className="w-48 h-auto flex items-center justify-center relative lg:w-32 md:w-24">
        <CircularText className="fill-dark animate-spin-slow dark:fill-light" />
        <Link
          href="mailto:anna.shchavinska@gmail.com"
          target={"_blank"}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light dark:bg-light dark:text-dark md:w-12 md:h-12 md:text-[10px] lg:w-16 lg:h-16 lg:text-[12px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
