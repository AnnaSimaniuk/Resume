import Logo from "@/components/logo/Logo";
import CustomLink from "@/UI/custom-link/CustomLink";
import {
  GithubIcon,
  GmailIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TelegramIcon,
} from "@/UI/icons/Icons";
import CustomIcon from "@/UI/icons/CustomIcon";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { useEffect, useState } from "react";
import BurgerMenu from "@/components/navbar/burger-menu/BurgerMenu";

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleMenuOpen}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title={"Home"} className="mr-4" />
          <CustomLink href="/about" title={"About"} className="mr-4" />
          <CustomLink href="/projects" title={"Projects"} className="mr-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <CustomIcon
            href="https://www.linkedin.com/in/anna-simaniuk-0b7b5524b/"
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </CustomIcon>
          <CustomIcon
            href="https://github.com/AnnaSimaniuk"
            className="w-6 mx-3"
          >
            <GithubIcon />
          </CustomIcon>
          <CustomIcon
            href="mailto:anna.shchavinska@gmail.com"
            className="w-6 mx-3"
          >
            <GmailIcon />
          </CustomIcon>
          <CustomIcon href="https://t.me/AnnaSimaniuk" className="w-6 ml-3">
            <TelegramIcon />
          </CustomIcon>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="ml-3 flex items-center justify-center rounded-full p-1"
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <BurgerMenu isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
      )}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
