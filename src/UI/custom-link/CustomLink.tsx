import Link from "next/link";
import { useRouter } from "next/router";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} className={`relative group ${className}`}>
      {title}
      <span
        style={{
          height: "1px",
          left: "0px",
          bottom: "-0.125rem",
          width: router.asPath === href ? "100%" : "0%",
          transition: "width 0.3s ease-in 0s",
        }}
        className="bg-dark inline-block absolute group-hover:w-full dark:bg-light"
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
