import Layout from "@/components/layout/Layout";
import Image from "next/image";
import pictureProfile from "../../public/image/profile-picture.png";
import AnimatedText from "@/UI/animated-text/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/UI/icons/Icons";
import HireMe from "@/components/hire-me/HireMe";
import lightBulb from "../../public/image/miscellaneous_icons_1.svg";
import TransitionEffect from "@/UI/transition-effect/TransitionEffect";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full dark:text-light mt-2">
        <Layout className="pt-16 pb-16 relative sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col md:justify-center">
            <div className="w-1/2 md:w-full">
              <Image
                src={pictureProfile}
                alt={"profile picture"}
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center md:pt-2">
              <AnimatedText
                text={
                  "From banking lines to React design - development is my newfound vision!"
                }
                className="!text-5xl text-left xl:!text-5xl lg:!text-4xl md:!text-3xl sm:!text-2xl lg:!text-center"
              />
              <p className="my-4 text-base font-medium text-2xl md:text-sm">
                Hello, I'm Anya - a banking powerhouse turned programming
                frontend enthusiast! Passionate React developer, eager to
                embrace new horizons in the IT world. What's the next coding
                quest?
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/resume-Anna-Simaniuk.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:border-light dark:bg-light dark:text-dark md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                  <LinkArrow className="ml-1 w-6" />
                </Link>
                <Link
                  href="mailto:anna.shchavinska@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute right-8 bottom-2 inline-block w-20 md:hidden">
            <Image src={lightBulb} alt="light blub" className="w-full h-auto" />
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
