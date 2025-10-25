import Layout from "../layout/layout";
import { motion } from "framer-motion";

const Project = () => {
  const projects = [
    {
      title: "Sistem Monitoring Tugas Luar Pegawai",
      description:
        "A web-based system for managing and monitoring employee assignments efficiently. Built with Laravel and React, featuring secure role-based access and dynamic PDF reports.",
      tech: ["Laravel", "React", "MySQL", "TailwindCSS"],
      link: "#",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "An interactive and visually appealing portfolio showcasing my projects and skills as a web developer. Designed with modern animations and responsive layouts.",
      tech: ["React", "Framer Motion", "TailwindCSS"],
      link: "#",
    },
    {
      title: "API Integration Dashboard",
      description:
        "A data visualization dashboard integrating multiple APIs using Axios, presenting analytics and performance metrics with Recharts.",
      tech: ["Next.js", "Axios", "Recharts"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "A minimalist task management application to organize and track personal productivity. Includes authentication and real-time updates.",
      tech: ["Node.js", "Express", "React", "MongoDB"],
      link: "#",
    },
    {
      title: "E-Commerce Admin Panel",
      description:
        "An admin dashboard for managing products, orders, and users in an online store with clean UI and secure CRUD operations.",
      tech: ["Laravel", "Vue.js", "MySQL"],
      link: "#",
    },
    {
      title: "Chat Application",
      description:
        "A real-time chat app with private and group messaging features, using WebSocket for instant communication.",
      tech: ["React", "Socket.io", "Node.js"],
      link: "#",
    },
  ];

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
