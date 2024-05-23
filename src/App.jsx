import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "./App.css";
import About from "./Components/About";

import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import  { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>

      <Toaster />

    </>
  );
}

export default App;
