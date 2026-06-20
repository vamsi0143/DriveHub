import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Cars from "./Pages/Cars";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import CarDetails from "./Pages/CarDetails";

import SUV from "./Pages/SUV";
import Sedan from "./Pages/Sedan";
import Electric from "./Pages/Electric";
import Services from "./Pages/Services";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        <Route path="/cars" element={<Cars />}>
          <Route path="suv" element={<SUV />} />
          <Route path="sedan" element={<Sedan />} />
          <Route path="electric" element={<Electric />} />
        </Route>

        <Route path="/car/:id" element={<CarDetails />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;