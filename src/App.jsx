import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import TreatmentDetail from "./pages/TreatmentDetail";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import ThankYou from "./pages/ThankYou";
import Privacy from "./pages/Privacy";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:category/:slug" element={<TreatmentDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/skinhair/thankyou" element={<ThankYou />} />
          <Route path="/thank-you" element={<Navigate to="/skinhair/thankyou" replace />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
