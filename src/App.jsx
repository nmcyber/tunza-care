
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = ({ children }) => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route/>
      </Routes>
    </Router>
  );
};

export default App;
// <p>&copy; {new Date().getFullYear()} Vite React Template. All rights reserved.</p>
