import { Routes, Route } from "react-router-dom";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx"
import Header from "./component/Header.jsx";
import More from "./component/More.jsx";
import Footer from "./component/Footer.jsx";


function App() {
  return (
    <>
    <div className="fixed z-50 w-full top-0">
<Header  />
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More/>} />
      </Routes>
    
    <Footer />
</>
  );
}

export default App;