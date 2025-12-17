import { Home, User, FolderGit2, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  /* ========== VARIANTS DESKTOP ========== */
  const itemVariants = {
    initial: {
      borderRadius: "100%",
      width: 50,
      height: 50,
      border: "3px solid rgba(56,189,248,0.8)",
      color: "#b8bcff",
    },
    hover: {
      border: "3px solid #8B5CF6",
      color: "#747bff",
      borderRadius: "10px",
      width: 120,
      boxShadow: `
        0 0 20px rgba(139,92,246,0.6),
        0 0 60px rgba(147,197,253,0.4)
      `,
      transition: { duration: 0.3 },
    },
    active: {
      border: "3px solid #8B5CF6",
      color: "#747bff",
      borderRadius: "10px",
      width: 120,
      boxShadow: `
        0 0 20px rgba(139,92,246,0.6)
      `,
    },
  };

  const textVariants = {
    initial: { opacity: 0, display: "none" },
    hover: { opacity: 1, display: "block" },
    active: { opacity: 1, display: "block" },
  };

  const bgMenu =
    "bg-[rgba(255,255,255,0.08)] backdrop-blur-md flex justify-center items-center overflow-hidden";

  const menus = [
    { to: "/", label: "Home", icon: <Home size={18} /> },
    { to: "/about", label: "About", icon: <User size={18} /> },
    { to: "/project", label: "Projects", icon: <FolderGit2 size={18} /> },
    { to: "/contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <header className="hidden md:block h-16 sticky top-0 z-50">
        <div className="container mx-auto flex justify-center items-center pt-10 px-6">
          <nav>
            <ul className="flex space-x-8">
              {menus.map((menu) => (
                <motion.li
                  key={menu.to}
                  className={bgMenu}
                  variants={itemVariants}
                  initial={isActive(menu.to) ? "active" : "initial"}
                  animate={isActive(menu.to) ? "active" : "initial"}
                  whileHover="hover"
                >
                  <Link to={menu.to} className="flex items-center gap-2 px-2">
                    {menu.icon}
                    <motion.span
                      variants={textVariants}
                      initial={isActive(menu.to) ? "active" : "initial"}
                      animate={isActive(menu.to) ? "active" : "initial"}
                    >
                      {menu.label}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2
        bg-[rgba(255,255,255,0.08)] backdrop-blur-md
        px-6 py-3 rounded-full z-50"
      >
        <ul className="flex gap-6">
          {menus.map((menu) => (
            <motion.li
              key={menu.to}
              animate={
                isActive(menu.to)
                  ? {
                      color: "#38bdf8",
                      scale: 1.2,
                      textShadow: "0 0 10px rgba(56,189,248,0.8)",
                    }
                  : { color: "#b8bcff", scale: 1 }
              }
            >
              <Link to={menu.to}>{menu.icon}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
