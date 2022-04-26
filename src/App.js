import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";



function App() {
  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </>

  );
}

export default App;