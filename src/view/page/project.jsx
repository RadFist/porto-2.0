import Layout from "../layout/layout";
import { motion } from "framer-motion";
import { projects } from "../../data/data";
import ProjectModal from "../../components/modal";
import { useState } from "react";

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function handlerShowModal(e, proj) {
    e.preventDefault();
    setSelectedProject(proj);
    setIsOpen(true);
  }

  function handlerCloseModal(e) {
    e.preventDefault();
    setIsOpen(false);
    setSelectedProject(null);
  }

  return (
    <Layout>
      <section className="relative min-h-screen flex flex-col items-center text-white px-4 sm:px-6 py-16 sm:py-20">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center"
        >
          My <span className="text-blue-200">Projects</span>
        </motion.h1>

        <ProjectModal
          isOpen={isOpen}
          data={selectedProject}
          close={handlerCloseModal}
        />

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 max-w-7xl w-full"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.25 },
            },
          }}
        >
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="
                bg-white/10 backdrop-blur-md border border-white/20
                rounded-2xl p-4 sm:p-6
                flex flex-col justify-between
                transition-all duration-300
                md:hover:shadow-xl md:hover:scale-[1.04]
              "
            >
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-2">
                  {proj.title}
                </h2>

                <p className="text-xs sm:text-sm text-gray-200 mb-4 leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/20 text-[11px] sm:text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={(e) => handlerShowModal(e, proj)}
                className="
                  self-start text-sm sm:text-base
                  text-purple-200 hover:text-white
                  font-medium underline underline-offset-4
                  transition-colors
                "
              >
                View Detail →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Layout>
  );
};

export default Project;
