import CustomIcon from "@/UI/icons/CustomIcon";
import {
  GithubIcon,
  GmailIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TelegramIcon,
} from "@/UI/icons/Icons";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import CustomMobileLink from "@/UI/custom-link/custom-mobile-link/CustomMobileLink";
import { motion } from "framer-motion";

interface BurgerMenuProps {
  handleMenuOpen: () => void;
}

const BurgerMenu = ({ handleMenuOpen }: BurgerMenuProps) => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
      animate={{ scale: 1, opacity: 1 }}
      className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
    >
      <nav className="flex items-center flex-col justify-center">
        <CustomMobileLink
          href="/"
          title={"Home"}
          className=""
          toggle={handleMenuOpen}
        />
        <CustomMobileLink
          href="/about"
          title={"About"}
          className=""
          toggle={handleMenuOpen}
        />
        <CustomMobileLink
          href="/projects"
          title={"Projects"}
          className=""
          toggle={handleMenuOpen}
        />
      </nav>
      <nav className="flex items-center justify-center flex-wrap dark:text-dark text-light mt-2">
        <CustomIcon
          href="https://www.linkedin.com/in/anna-simaniuk-0b7b5524b/"
          className="w-6 mx-3 sm:mx-1"
        >
          <LinkedInIcon />
        </CustomIcon>
        <CustomIcon
          href="https://github.com/AnnaSimaniuk"
          className="w-6 mx-3 sm:mx-1"
        >
          <GithubIcon />
        </CustomIcon>
        <CustomIcon
          href="mailto:anna.shchavinska@gmail.com"
          className="w-6 mx-3 sm:mx-1"
        >
          <GmailIcon />
        </CustomIcon>
        <CustomIcon
          href="https://t.me/AnnaSimaniuk"
          className="w-6 ml-3 sm:mx-1"
        >
          <TelegramIcon />
        </CustomIcon>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1"
        >
          {mode === "dark" ? (
            <SunIcon className="fill-dark" />
          ) : (
            <MoonIcon className="fill-dark" />
          )}
        </button>
      </nav>
    </motion.div>
  );
};

export default BurgerMenu;
