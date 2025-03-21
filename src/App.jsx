import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import TrustedPartnership from "./components/Landing/TrustedPartnerships"
import Home from "./pages/Home"
import Services from "./pages/Services" // Import the new Services page
import Footer from "./components/Footer/footer"

const App = ({ children }) => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/About" element={<TrustedPartnership />} />
        <Route path="/Services" element={<Services />} /> {/* Add the Services route */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

