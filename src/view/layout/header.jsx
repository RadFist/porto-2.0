import { useState } from "react";
import { Home, User, FolderGit2, Mail } from "lucide-react";
import { motion } from "motion/react";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="h-16 sticky top-0 z-50">
      <div className="container mx-auto  flex justify-center items-center pt-10 px-6">
        {/* Logo / Nama */}

        <nav>
          <ul className=" flex space-x-8 text-gray-700 font-medium lg-icon">
            <motion.li
              className=" bg-[#d8edf5] flex items-center overflow-hidden"
              initial={{
                border: "3px solid rgba(56, 189, 248, 0.8)",
                borderRadius: "100%",
                width: 50,
                height: 50,
              }}
              whileHover={{
                border: "3px solid #8B5CF6", // ungu lembut (Tailwind purple-500)
                boxShadow: `
              0 0 20px rgba(139, 92, 246, 0.6), 
              0 0 60px rgba(147, 197, 253, 0.4), 
              0 0 100px rgba(236, 72, 153, 0.3)   
            `,
                borderRadius: "10px",
                width: 120,
              }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <motion.a href="/" className="flex items-center gap-2 px-2">
                <Home size={18} />
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  Home
                </motion.span>
              </motion.a>
            </motion.li>

            <motion.li
              className=" bg-[#d8edf5] flex items-center overflow-hidden"
              initial={{
                border: "3px solid rgba(56, 189, 248, 0.8)",
                borderRadius: "100%",
                width: 50,
                height: 50,
              }}
              whileHover={{
                border: "3px solid #8B5CF6", // ungu lembut (Tailwind purple-500)
                boxShadow: `
              0 0 20px rgba(139, 92, 246, 0.6), 
              0 0 60px rgba(147, 197, 253, 0.4), 
              0 0 100px rgba(236, 72, 153, 0.3)   
            `,
                borderRadius: "10px",
                width: 120,
              }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <motion.a href="/about" className="flex items-center gap-2 px-2">
                <User size={18} />
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  About
                </motion.span>
              </motion.a>
            </motion.li>

            <motion.li
              className=" bg-[#d8edf5] flex items-center overflow-hidden"
              initial={{
                border: "3px solid rgba(56, 189, 248, 0.8)",
                borderRadius: "100%",
                width: 50,
                height: 50,
              }}
              whileHover={{
                border: "3px solid #8B5CF6", // ungu lembut (Tailwind purple-500)
                boxShadow: `
              0 0 20px rgba(139, 92, 246, 0.6), 
              0 0 60px rgba(147, 197, 253, 0.4), 
              0 0 100px rgba(236, 72, 153, 0.3)   
            `,
                borderRadius: "10px",
                width: 120,
              }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <motion.a
                href="/project"
                className="flex items-center gap-2 px-2"
              >
                <FolderGit2 size={18} />
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  Projects
                </motion.span>
              </motion.a>
            </motion.li>

            <motion.li
              className=" bg-[#d8edf5] flex items-center overflow-hidden"
              initial={{
                border: "3px solid rgba(56, 189, 248, 0.8)",
                borderRadius: "100%",
                width: 50,
                height: 50,
              }}
              whileHover={{
                border: "3px solid #8B5CF6", // ungu lembut (Tailwind purple-500)
                boxShadow: `
              0 0 20px rgba(139, 92, 246, 0.6), 
              0 0 60px rgba(147, 197, 253, 0.4), 
              0 0 100px rgba(236, 72, 153, 0.3)   
            `,
                borderRadius: "10px",
                width: 120,
              }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <motion.a
                href="/contact"
                className="flex items-center gap-2 px-2"
              >
                <Mail size={18} />
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  Contact
                </motion.span>
              </motion.a>
            </motion.li>
          </ul>
        </nav>

        {/* btn mobile*/}

        {/* <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          <ToggleMenu isOpen={isOpen}>
            <ListMenu />
          </ToggleMenu>
        </div> */}
      </div>
    </header>
  );

  function ToggleMenu({ isOpen, children }) {
    if (!isOpen) return null;

    return (
      <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-lg">
        <ul className="flex flex-col text-gray-700 font-medium p-2 space-y-2">
          {children}
        </ul>
      </div>
    );
  }
};

function ListMenu() {
  return (
    <>
      <li>
        <a
          href="/"
          className="flex items-center gap-2 hover:text-blue-500 transition-colors"
        >
          <Home size={18} />
          <span>Home</span>
        </a>
      </li>
      <li>
        <a
          href="/about"
          className="flex items-center gap-2 hover:text-blue-500 transition-colors"
        >
          <User size={18} />
          <span>About Me</span>
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="flex items-center gap-2 hover:text-blue-500 transition-colors"
        >
          <FolderGit2 size={18} />
          <span>Projects</span>
        </a>
      </li>
      <li>
        <a
          href="/contact"
          className="flex items-center gap-2 hover:text-blue-500 transition-colors"
        >
          <Mail size={18} />
          <span>Contact Me</span>
        </a>
      </li>
    </>
  );
}

export default Header;
