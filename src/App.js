import {React, useEffect, useState} from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./Modules/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Modules/About";
import Service from "./Modules/Service";
import News from "./Modules/News";
import Contact from "./Modules/Contact";

const App = () => {
  const [scrolltopdata, setscrolltopdata] = useState('');
  useEffect(() => {
      window.addEventListener('scroll', () => {
          if (window.scrollY < 15) {
              setscrolltopdata('');
          } else {
              setscrolltopdata('active');
          }
      });
  }, [])
  return (
    <BrowserRouter>
    <section className="mainComponent">
    <div className={`navBars ${scrolltopdata}`}>
    <Header />
    </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>  
      <Footer /> 
    </section>
    </BrowserRouter>
  );
};

export default App;
