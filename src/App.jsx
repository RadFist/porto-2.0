import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./view/page/index";
import About from "./view/page/about";
import Contact from "./view/page/contact";
import Project from "./view/page/project";
import ScrollToTop from "./components/TopScroll";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
