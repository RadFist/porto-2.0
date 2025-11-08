import Layout from "../layout/layout";
import { motion } from "framer-motion";
import { projects } from "../../data/data";
const Project = () => {
  return (
    <Layout>
      <section className="relative min-h-screen overflow-hidden flex flex-col items-center text-white px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center z-10"
        >
          My <span className="text-blue-200">Projects</span>
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full z-10"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.4,
              },
            },
          }}
        >
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-3">{proj.title}</h2>
                <p className="text-sm text-gray-200 mb-5 leading-relaxed">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-white/20 text-sm px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={proj.link}
                className="text-purple-200 hover:text-white underline font-medium transition-colors duration-200"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Layout>
  );
};

export default Project;
