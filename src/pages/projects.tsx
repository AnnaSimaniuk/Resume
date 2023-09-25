import Head from "next/head";
import Layout from "@/components/layout/Layout";
import AnimatedText from "@/UI/animated-text/AnimatedText";
import FeaturedProject from "@/components/featured-project/FeaturedProject";
import TechnoKitImage from "../../public/image/TechnoKit.png";
import CardImage from "../../public/image/SP3.png";
import MinesweeperImage from "../../public/image/Minesweeper.png";
import ForkioImage from "../../public/image/Forkio.png";
import LogicGov from "../../public/image/LogicGov.png";
import Mealsy from "../../public/image/Mealsy.png";
import Project from "@/components/project/Project";
import Link from "next/link";
import TransitionEffect from "@/UI/transition-effect/TransitionEffect";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center mt-2">
        <Layout className="!pt-4 pb-0">
          <AnimatedText
            text={"Imagination Trumps Knowledge!"}
            className="!text-7xl w-fit mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type={"Recipe App"}
                title={"Mealsy"}
                summary={
                  "This website is a culinary haven for food enthusiasts. I offer convenient recipe search and filtering based on ingredients, cuisines, dietary preferences, and cooking time, with the added benefit of an innovative recipe search constructor. Registration unlocks personalized features to enhance your culinary journey. You can also create and manage culinary books to store and organize your favorite recipes, along with efficient shopping list planning based on selected recipes. My extensive recipe database boasts over 4000 diverse recipes, each accompanied by high-quality photos, instructive videos, and detailed descriptions. "
                }
                img={Mealsy}
                link={"https://mealsy-ipnc.vercel.app/"}
                github={"https://github.com/AnnaSimaniuk/Mealsy"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                link={"https://www.logicgov.com/"}
                type={"Landing Page"}
                title={"logicGov"}
                summary={
                  "This multilingual (english and hebrew) landing page for company which provide services: web development, branding & design, digital marketing, Python solutions, and blockchain solutions services."
                }
                img={LogicGov}
                github={"https://github.com/AnnaSimaniuk"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                link={"https://annasimaniuk.github.io/Forkio/"}
                type={"Landing Page"}
                title={"Forkio"}
                summary={
                  "Landing page with custom JavaScript animations and functionality. It is designed with a focus on user experience, engagement, and aesthetics. The landing page is fully responsive, ensuring that it looks great and functions smoothly across various devices and screen sizes."
                }
                img={ForkioImage}
                github={"https://github.com/AnnaSimaniuk/Forkio"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type={"E-Commerce Website"}
                title={"Techno Kit"}
                summary={
                  "TechnoKit is an e-commerce website developed using React. It allows users to browse and purchase a wide range of technology products. The project includes features such as product search, wish list, product comparison, detailed product pages with sliders and rating/review functionality, newsletter subscription, user account dashboard and admin panel with charts and data management."
                }
                img={TechnoKitImage}
                link={"https://technokit-store-0fet.onrender.com/"}
                github={"https://github.com/AnnaSimaniuk/TechnoKit"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                link={"https://bullet26.github.io/DAN.IT-SP3/"}
                type={"Secretary App"}
                title={"Cards"}
                summary={
                  "The application allows secretary to create, edit, and delete patients' appointments with doctors. The logic for the calendar is implemented to provide an intuitive and organized view of scheduled appointments. For convenience, drag and drop functionality is incorporated, enabling easy rescheduling of appointments."
                }
                img={CardImage}
                github={"https://github.com/AnnaSimaniuk/Step_Cards"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                link={"https://annasimaniuk.github.io/minesweeper/"}
                type={"Game"}
                title={"Minesweeper"}
                summary={
                  "The Minesweeper game is a fun and challenging puzzle game. Players must use logic and deduction to reveal cells on the grid without hitting any mines. If a player uncovers a mine, the game ends, and the player's score is displayed based on the number of correct guesses."
                }
                img={MinesweeperImage}
                github={"https://github.com/AnnaSimaniuk/minesweeper"}
              />
            </div>
          </div>
          <div className="mt-16">
            <p className="text-dark text-center text-2xl dark:text-light md:text-xl">
              To see more projects, please visit my{" "}
              <Link
                href="https://github.com/AnnaSimaniuk"
                className="text-primary font-medium text-2xl dark:text-primaryDark md:text-xl"
              >
                GitHub
              </Link>
            </p>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
