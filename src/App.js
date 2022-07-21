import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/about';
import Home from './components/Pages/home';
import Policies from './components/Pages/policies';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={ <Navbar/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/policies" element={ <Policies/> } />
        <Route path="/Footer" element={ <Footer/> } />
      </Routes>  
    </div>
  );
}

export default App;
