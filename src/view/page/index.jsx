import Layout from "../layout/layout";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex justify-center items-center px-15 py-10">
        <motion.div
          className="rounded-xl flex flex-col md:flex-row justify-between items-center px-20 md:px-20 py-10 bg-[rgba(255,255,255,0.08)] backdrop-blur-md border sshadow-[0_0_40px_rgba(139,92,246,0.2)] transition-all duration-500"
          initial={{
            border: "2px solid rgba(56, 189, 248, 0.8)",
            boxShadow: "0 0 15px rgba(56, 189, 248, 0.3)",
          }}
          whileHover={{
            border: "2px solid rgba(168, 85, 247, 0.9)",
            boxShadow: `
        0 0 25px rgba(168, 85, 247, 0.5),
        0 0 50px rgba(236, 72, 153, 0.3),
        0 0 80px rgba(56, 189, 248, 0.2)
      `,
            scale: 1.01,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Teks kiri */}
          <div className="space-y-6 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Hi, I'm
            </h1>
            <h1 className="text-5xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
              Muhamad Rifansyah Aliyilbuni
            </h1>

            <span className="ml-2 font-semibold text-pink-400">
              <Typewriter
                words={[
                  "Web Developer",
                  "Back-End Developer",
                  "Junior Programmer",
                ]}
                loop
                cursor
                cursorStyle=""
                typeSpeed={60}
                deleteSpeed={30}
                delaySpeed={1500}
              />
            </span>
            <div className="w-full border-b border-dashed border-[rgba(255,255,255,0.3)]"></div>
            <p className="text-gray-200 text-lg leading-relaxed">
              A passionate developer who loves crafting beautiful, functional,
              and efficient web applications using modern technologies. I enjoy
              turning ideas into reality through clean code, responsive design,
              and optimized performance. With a strong focus on both user
              experience and backend logic, I constantly strive to build
              seamless digital experiences that not only work great but also
              look stunning. I’m always eager to learn, adapt, and explore new
              frameworks or tools that push my creativity and technical
              boundaries.
            </p>
          </div>

          {/* Foto kanan */}
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF02Jj8T2t7PdkytAw42HDuuSz7yXguKn8Lg&s"
              alt="Profile"
              className="rounded-full shadow-[0_0_30px_rgba(168,85,247,0.4)] w-64 h-64 object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Skill Section */}
      <section className="px-5 pb-16 pt-5 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">
          My Skills
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 w-full max-w-6xl">
          {/* === FRONT-END === */}
          <motion.div
            className="flex-1 p-6 rounded-xl bg-[rgba(255,255,255,0.08)] backdrop-blur-md"
            initial={{ border: "2px solid rgba(56,189,248,0.5)" }}
            whileHover={{
              border: "2px solid rgba(168,85,247,0.9)",
              boxShadow: `
          0 0 25px rgba(168,85,247,0.5),
          0 0 60px rgba(236,72,153,0.3),
          0 0 100px rgba(56,189,248,0.2)
        `,
            }}
            transition={{ duration: 0.1 }}
          >
            <h2 className="text-3xl font-semibold text-cyan-400 mb-6 text-left">
              Front-End
            </h2>
            <ul className="grid grid-cols-2 gap-3 text-left">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React.js",
                "Tailwind CSS",
                "Framer Motion",
              ].map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-2 bg-[rgba(168,85,247,0.15)] rounded-lg text-gray-100 text-sm font-medium hover:bg-[rgba(168,85,247,0.3)] transition"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="flex-1 p-6 rounded-xl bg-[rgba(255,255,255,0.08)] backdrop-blur-md"
            initial={{ border: "2px solid rgba(56,189,248,0.5)" }}
            whileHover={{
              border: "2px solid rgba(168,85,247,0.9)",
              boxShadow: `
          0 0 25px rgba(168,85,247,0.5),
          0 0 60px rgba(236,72,153,0.3),
          0 0 100px rgba(56,189,248,0.2)
        `,
              scale: 1.02,
            }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-semibold text-cyan-400 mb-6 text-left">
              Back-End
            </h2>
            <ul className="grid grid-cols-2 gap-3 text-left">
              {[
                "PHP",
                "Laravel",
                "Node.js",
                "Express.js",
                "REST API",
                "MySQL",
              ].map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-2 bg-[rgba(236,72,153,0.15)] rounded-lg text-gray-100 text-sm font-medium hover:bg-[rgba(236,72,153,0.3)] transition"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="flex-1 p-6 rounded-xl bg-[rgba(255,255,255,0.08)] backdrop-blur-md"
            initial={{ border: "2px solid rgba(56,189,248,0.5)" }}
            whileHover={{
              border: "2px solid rgba(168,85,247,0.9)",
              boxShadow: `
          0 0 25px rgba(168,85,247,0.5),
          0 0 60px rgba(236,72,153,0.3),
          0 0 100px rgba(56,189,248,0.2)
        `,
              scale: 1.02,
            }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-semibold text-cyan-400 mb-6 text-left">
              Tools
            </h2>
            <ul className="grid grid-cols-2 gap-3 text-left">
              {[
                "Git & GitHub",
                "VS Code",
                "Postman",
                "Figma",
                "XAMPP",
                "Vercel",
              ].map((tool) => (
                <li
                  key={tool}
                  className="px-3 py-2 bg-[rgba(56,189,248,0.15)] rounded-lg text-gray-100 text-sm font-medium hover:bg-[rgba(56,189,248,0.3)] transition"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
