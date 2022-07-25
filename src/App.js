import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/about';
import Home from './components/Pages/home';
import Policies from './components/Pages/policies';
import Footer from './components/Footer/Footer';
import Meddiv from './components/Meddiv/meddiv';
import Nurdiv from './components/Nurdiv/nurdiv';
import Busdiv from './components/Busdiv/busdiv';
import Addiv from './components/Addiv/addiv';
import Sao from './components/Addiv/sao';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={ <Navbar/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/policies" element={ <Policies/> } />
        <Route path="/Footer" element={ <Footer/> } />
        <Route path="/meddiv" element={ <Meddiv/> } />
        <Route path="/nurdiv" element={ <Nurdiv/> } />
        <Route path="/busdiv" element={ <Busdiv/> } />
        <Route path="/addiv" element={ <Addiv/> } />
        <Route path="/sao" element={ <Sao/> } />
      </Routes>  
    </div>
  );
}

export default App;
