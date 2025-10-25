import Layout from "../layout/layout";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen p-10 flex justify-center items-center">
        <motion.div
          className="border p-3 rounded-md  flex  flex-col md:flex-row  justify-between items-center px-6 md:px-20"
          whileHover={{ border: "1px solid blue" }}
        >
          <div className="space-y-6 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-0 ">
              Hi i'm
            </h1>
            <h1 className="text-5xl font-bold text-blue-500">
              Muhamad Rifansyah Aliyilbuni
            </h1>
            <div class="w-full border-2 border-dashed border-accent-5"></div>
            <p className="text-gray-600 text-lg">
              A passionate{" "}
              <span className="font-semibold">
                <Typewriter
                  words={["Web Developer", "Back End", "Junior Programmer"]}
                  loop={true}
                  cursor
                  cursorStyle=""
                  typeSpeed={60}
                  deleteSpeed={30}
                  delaySpeed={1500}
                />
              </span>
              {""} who loves crafting beautiful and functional web applications
              using modern technologies.
            </p>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF02Jj8T2t7PdkytAw42HDuuSz7yXguKn8Lg&s"
              alt="Profile"
              className="rounded-full shadow-lg w-64 h-64 object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Skill Section */}
      <section className="py-20 px-5 md:px-20 bg-white text-center flex justify-center  flex-col items-stretch">
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 mb-4">
          <motion.div
            className="border p-3 rounded-md flex-1"
            whileHover={{ border: "1px solid blue" }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">
              Front-End
            </h2>
          </motion.div>
          <motion.div
            className="border p-3 rounded-md flex-1"
            whileHover={{ border: "1px solid blue" }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">
              Back-End
            </h2>
          </motion.div>
        </div>
        <motion.div
          className="border p-3 rounded-md"
          whileHover={{ border: "1px solid blue" }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">
            Tools
          </h2>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
