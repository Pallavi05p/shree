import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"; 

// Pages import
import Home from "./Pages/Home";
import Vadya from "./Pages/Vadya";
import Events from "./Pages/Event";
import Photos from "./Pages/Photoes";
import Utsav from "./Pages/Utsav";
import Hero from "./Pages/Hero";

function App() {
  return (
    <Router>
      {/* Hero on all pages */}
      <Hero />

      {/* Navbar on all pages */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vadya" element={<Vadya />} />
        <Route path="/events" element={<Events />} />
        <Route path="/photo" element={<Photos />} />
        <Route path="/utsav" element={<Utsav />} />
      </Routes>

      <Footer /> 
    </Router>
  );
}

export default App;
