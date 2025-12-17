import Layout from "../layout/layout";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
import { skillSet } from "../../data/data.js";

const Index = () => {
  const animateSkill = {
    initial: { opacity: 0, scale: 1.1 },
    animate: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.15 * index,
      },
    }),
  };

  return (
    <Layout>
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex justify-center items-center px-4 py-10 sm:px-6 md:px-10">
        <motion.div
          className="
            rounded-xl
            flex flex-col md:flex-row
            justify-between items-center
            w-full max-w-6xl
            px-6 md:px-20
            py-8 md:py-10
            bg-[rgba(255,255,255,0.08)]
            backdrop-blur-md
            border
            shadow-[0_0_40px_rgba(139,92,246,0.2)]
          "
          initial={{
            opacity: 0,
            border: "2px solid rgba(56,189,248,0.8)",
            boxShadow: "0 0 15px rgba(56,189,248,0.3)",
          }}
          animate={{ opacity: 1 }}
          whileHover={{
            border: "2px solid rgba(168,85,247,0.9)",
            boxShadow: `
              0 0 25px rgba(168,85,247,0.5),
              0 0 50px rgba(236,72,153,0.3),
              0 0 80px rgba(56,189,248,0.2)
            `,
            scale: 1.01,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* TEXT */}
          <div className="space-y-6 md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Hi, I'm
            </h1>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
              Muhamad Rifansyah Aliyilbuni
            </h1>

            <span className="block text-sm sm:text-base font-semibold text-pink-400">
              <Typewriter
                words={[
                  "Web Developer",
                  "Back-End Developer",
                  "Junior Programmer",
                ]}
                loop
                cursor
                typeSpeed={60}
                deleteSpeed={30}
                delaySpeed={1500}
              />
            </span>

            <div className="w-full border-b border-dashed border-[rgba(255,255,255,0.3)]" />

            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
              A passionate developer who loves crafting beautiful, functional,
              and efficient web applications using modern technologies. I enjoy
              turning ideas into reality through clean code, responsive design,
              and optimized performance. With a strong focus on both user
              experience and backend logic, I constantly strive to build
              seamless digital experiences that not only work great but also
              look stunning.
            </p>
          </div>

          {/* IMAGE */}
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="/profile.webp"
              alt="Profile"
              className="
                rounded-full
                w-40 h-40
                sm:w-52 sm:h-52
                md:w-64 md:h-64
                object-cover object-top
                shadow-[0_0_30px_rgba(168,85,247,0.4)]
              "
            />
          </div>
        </motion.div>
      </section>

      {/* ================= SKILL SECTION ================= */}
      <section className="px-4 sm:px-6 pb-16 pt-5 text-center flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">
          My Skills
        </h1>

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
          {/* FRONT-END */}
          <motion.div
            className="flex-1 p-6 rounded-xl bg-[rgba(255,255,255,0.08)] backdrop-blur-md"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-6 text-left">
              Front-End
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillSet.frontEnd.map((skill, index) => (
                <motion.li
                  key={skill}
                  className="px-3 py-2 bg-[rgba(168,85,247,0.15)] rounded-lg text-gray-100 text-sm font-medium"
                  variants={animateSkill}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* BACK-END */}
          <motion.div
            className="flex-1 p-6 rounded-xl bg-[rgba(255,255,255,0.08)] backdrop-blur-md"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-6 text-left">
              Back-End
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillSet.backEnd.map((skill, index) => (
                <motion.li
                  key={skill}
                  className="px-3 py-2 bg-[rgba(236,72,153,0.15)] rounded-lg text-gray-100 text-sm font-medium"
                  variants={animateSkill}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* TOOLS */}
          <motion.div
            className="flex-1 p-6 rounded-xl bg-[rgba(255,255,255,0.08)] backdrop-blur-md"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-6 text-left">
              Tools
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillSet.Tools.map((tool, index) => (
                <motion.li
                  key={tool}
                  className="px-3 py-2 bg-[rgba(56,189,248,0.15)] rounded-lg text-gray-100 text-sm font-medium"
                  variants={animateSkill}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                >
                  {tool}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
