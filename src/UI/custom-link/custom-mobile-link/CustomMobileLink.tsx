import Link from "next/link";
import { useRouter } from "next/router";

interface CustomMobileLinkProps {
  href: string;
  title: string;
  className?: string;
  toggle: () => void;
}

const CustomMobileLink = ({
  href,
  title,
  className = "",
  toggle,
}: CustomMobileLinkProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
    toggle();
  };
  return (
    <button
      className={`relative group text-light dark:text-dark ${className} my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        style={{
          height: "1px",
          left: "0px",
          bottom: "-0.125rem",
          width: router.asPath === href ? "100%" : "0%",
          transition: "width 0.3s ease-in 0s",
        }}
        className="bg-light inline-block absolute group-hover:w-full dark:bg-dark"
      >
        &nbsp;
      </span>
    </button>
  );
};

export default CustomMobileLink;
