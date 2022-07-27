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
import Coc from './components/Meddiv/Coc/coc';
import Dietary from './components/Meddiv/Dietary/dietary';
import LabEcg from './components/Meddiv/LabEcg/labecg';
import MeddivTable from './components/Meddiv/meddivTable';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" exact element={ <Home/> } />
        <Route path="/home" element={ <Navbar/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/policies" element={ <Policies/> } />
        <Route path="/Footer" element={ <Footer/> } />
        <Route path="/meddiv" element={ <Meddiv/> } />
        <Route path="/nurdiv" element={ <Nurdiv/> } />
        <Route path="/busdiv" element={ <Busdiv/> } />
        <Route path="/addiv" element={ <Addiv/> } />
        <Route path="/sao" element={ <Sao/> } />
        <Route path="/coc" element={ <Coc/> } />
        <Route path="/dietary" element={ <Dietary/> } />
        <Route path="/labecg" element={ <LabEcg/> } />
        <Route path="/meddivTable" element={ <MeddivTable/> } />
      </Routes>
    </div>
    {/* <Footer /> */}
    </>
  );
}

export default App;
