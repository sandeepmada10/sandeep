import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import WorkWithMe from "../src/pages/WorkWithMe/WorkWithMe";
import Blog from "../src/pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkWithMe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
