import { useState } from "react";
import { Home, User, FolderGit2, Mail, Type } from "lucide-react";
import { hover, motion } from "motion/react";
import { useLocation, Link } from "react-router-dom";
import Hamburger from "hamburger-react";

const Header = () => {
  // const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const itemVariants = {
    initial: {
      borderRadius: "100%",
      width: 50,
      height: 50,
      border: "3px solid rgba(56, 189, 248, 0.8)",
      color: " #b8bcff",
    },
    hover: {
      border: "3px solid #8B5CF6",
      color: "#747bff",
      boxShadow: `
      0 0 20px rgba(139, 92, 246, 0.6), 
      0 0 60px rgba(147, 197, 253, 0.4), 
      0 0 100px rgba(236, 72, 153, 0.3)
    `,
      borderRadius: "10px",
      width: 120,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    active: {
      border: "3px solid #8B5CF6",
      color: "#747bff",
      boxShadow: `
      0 0 20px rgba(139, 92, 246, 0.6), 
      0 0 60px rgba(147, 197, 253, 0.4)
    `,
      borderRadius: "10px",
      width: 120,
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
      display: "none",
    },
    hover: {
      opacity: 1,
      display: "block",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    active: {
      opacity: 1,
      display: "block",
    },
  };

  const bgMenu =
    "bg-[rgba(255,255,255,0.08)] backdrop-blur-md flex justify-center items-center overflow-hidden";

  return (
    <header className="h-16 sticky top-0 z-50">
      <div className="container mx-auto  flex justify-center items-center pt-10 px-6">
        {/* Logo / Nama */}

        <nav>
          <ul className=" flex space-x-8 text-gray-700 font-medium lg-icon">
            <motion.li
              className={bgMenu}
              variants={itemVariants}
              initial={isActive("/") ? "active" : "initial"}
              whileHover="hover"
            >
              <Link to="/" className="flex items-center gap-2 px-2">
                <Home size={18} />
                <motion.span variants={textVariants}>Home</motion.span>
              </Link>
            </motion.li>

            <motion.li
              className={bgMenu}
              variants={itemVariants}
              initial={isActive("/about") ? "active" : "initial"}
              animate={isActive("/about") ? "active" : "initial"}
              whileHover="hover"
            >
              <Link to="/about" className="flex items-center gap-2 px-2">
                <User size={18} />
                <motion.span variants={textVariants}>About</motion.span>
              </Link>
            </motion.li>

            <motion.li
              className={bgMenu}
              variants={itemVariants}
              initial={isActive("/project") ? "active" : "initial"}
              animate={isActive("/project") ? "active" : "initial"}
              whileHover="hover"
            >
              <Link to="/project" className="flex items-center gap-2 px-2">
                <FolderGit2 size={18} />
                <motion.span variants={textVariants}>Projects</motion.span>
              </Link>
            </motion.li>

            <motion.li
              className={bgMenu}
              variants={itemVariants}
              initial={isActive("/contact") ? "active" : "initial"}
              animate={isActive("/contact") ? "active" : "initial"}
              whileHover="hover"
            >
              <Link to="/contact" className="flex items-center gap-2 px-2">
                <Mail size={18} />
                <motion.span variants={textVariants}>Contact</motion.span>
              </Link>
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

  // function ToggleMenu({ isOpen, children }) {
  //   if (!isOpen) return null;

  //   return (
  //     <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-lg">
  //       <ul className="flex flex-col text-gray-700 font-medium p-2 space-y-2">
  //         {children}
  //       </ul>
  //     </div>
  //   );
  // }
};

// function ListMenu() {
//   return (
//     <>
//       <li>
//         <a
//           href="/"
//           className="flex items-center gap-2 hover:text-blue-500 transition-colors"
//         >
//           <Home size={18} />
//           <span>Home</span>
//         </a>
//       </li>
//       <li>
//         <a
//           href="/about"
//           className="flex items-center gap-2 hover:text-blue-500 transition-colors"
//         >
//           <User size={18} />
//           <span>About Me</span>
//         </a>
//       </li>
//       <li>
//         <a
//           href="#projects"
//           className="flex items-center gap-2 hover:text-blue-500 transition-colors"
//         >
//           <FolderGit2 size={18} />
//           <span>Projects</span>
//         </a>
//       </li>
//       <li>
//         <a
//           href="/contact"
//           className="flex items-center gap-2 hover:text-blue-500 transition-colors"
//         >
//           <Mail size={18} />
//           <span>Contact Me</span>
//         </a>
//       </li>
//     </>
//   );
// }

export default Header;
