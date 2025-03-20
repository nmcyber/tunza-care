import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import TrustedPartnership from "./components/Landing/TrustedPartnerships";
import Home from "./pages/Home";
import Footer from "./components/Footer/footer";

const App = ({ children }) => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/About' element={<TrustedPartnership />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
// <p>&copy; {new Date().getFullYear()} Vite React Template. All rights reserved.</p>
