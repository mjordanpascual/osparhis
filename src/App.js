import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" exact element={ <Home/> } /> */}
      </Routes>
    </div>
    {/* <Footer /> */}
    </>
  );
}

export default App;
