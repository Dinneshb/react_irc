import './App.css';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import About from './pages/About';
import RegisterForm from './pages/RegisterForm';
import Contact from './pages/Contact';
import RegistrationForm from './pages/LoginForm';
// import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="RegistrationForm" element={<RegistrationForm/>}/>
        <Route path="RegisterForm" element={<RegisterForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;