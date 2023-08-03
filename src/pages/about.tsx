import Head from "next/head";
import AnimatedText from "@/UI/animated-text/AnimatedText";
import Layout from "@/components/layout/Layout";
import profilePhoto from "../../public/image/profile-photo.jpg";
import Image from "next/image";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Education from "../components/education/Education";
import TransitionEffect from "@/UI/transition-effect/TransitionEffect";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light mt-2">
        <Layout className="!pt-4">
          <AnimatedText
            text={"Passion Fuels Purpose!"}
            className="!text-7xl w-fit mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-5 flex flex-col items-start justify-start md:col-span-8 md:order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                Hello, my name is Anya. Throughout my life, I have been
                dedicated to learning and working in the banking sector.
                Starting as a contact center operator, I climbed the ladder to
                become the head of a central branch. However, my true passion
                lies in programming, especially in React. I've fallen in love
                with coding, and time seems to fly whenever I'm immersed in it.
              </p>
              <p className="my-4 font-medium">
                Recently, I completed my studies as a frontend developer, and
                I'm now seeking opportunities to build a career in this exciting
                field. I am eager to grow as a programmer, constantly
                challenging myself to improve and create innovative solutions.
                My goal is to contribute my skills and enthusiasm to a dynamic
                team, and to be part of shaping the future of web development.
              </p>
              <p className="font-medium">
                I am ready to embrace new challenges, work collaboratively, and
                continuously expand my knowledge and expertise. Programming is
                not just a career choice for me; it's a journey of endless
                possibilities, and I can't wait to embark on this exciting path
                of growth and development.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light md:col-span-5 sm:col-span-6 md:order-1">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePhoto}
                alt="Anya"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
