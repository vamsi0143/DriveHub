import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import CarDetails from "./pages/CarDetails";

import SUV from "./pages/SUV";
import Sedan from "./pages/Sedan";
import Electric from "./pages/Electric";
import Services from "./pages/Services";

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