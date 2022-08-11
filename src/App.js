import './App.css';
import { Routes, Route } from "react-router-dom"
import About from './components/Pages/about';
import Home from './components/Pages/home';
import Policies from './components/Pages/policies';
import Footer from './components/Footer/Footer';
import Meddiv from './components/Meddiv/meddiv';
import Nurdiv from './components/Nurdiv/nurdiv';
import Busdiv from './components/Busdiv/busdiv';
import Addiv from './components/Addiv/addiv';
import Sao from './components/Addiv/Sao/sao';
import Coc from './components/Meddiv/Coc/coc';
import Dietary from './components/Meddiv/Dietary/dietary';
import LabEcg from './components/Meddiv/LabEcg/labecg';
import Mss from './components/Meddiv/Mss/mss';
import Pharma from './components/Meddiv/Pharma/pharma';
import Radio from './components/Meddiv/Radio/radio';
import Pt from './components/Meddiv/PT/pt';
import Rt from './components/Meddiv/RT/radio';
import ChiefNurse from './components/Nurdiv/Chiefnurse/chiefnurse';
import AsstChiefNurse from './components/Nurdiv/AsstChiefNurse/asstchiefnurse';
import Infeccont from './components/Nurdiv/InfecCont/infeccont';
import Superv from './components/Nurdiv/Superv/superv';
import Headnurse from './components/Nurdiv/Headnurse/headnurse';
import Asstheadnurse from './components/Nurdiv/Asstheadnurse/asstheadnurse';
import Chargenurse from './components/Nurdiv/Chargenurse/chargenurse';
import Staffnurse from './components/Nurdiv/Staffnurse/staffnurse';
import Midwives from './components/Nurdiv/Midwives/midwives';
import Naclerk from './components/Nurdiv/Naclerk/naclerk';
import Csr from './components/Nurdiv/Csr/csr';
import Accounting from './components/Busdiv/Accounting/accounting';
import Billing from './components/Busdiv/billing/billing';
import Cashier from './components/Busdiv/cashier/cashier';
import Hr from './components/Addiv/Hr/hr';
import Admitting from './components/Addiv/Admitting/admitting';
import Cwu from './components/Addiv/Cwu/cwu';
import Linen from './components/Addiv/linen/linen';
import Mrd from './components/Addiv/mrd/mrd';
import It from './components/Addiv/It/it';
import Property from './components/Addiv/Property/property';
import To from './components/Addiv/To/to';
import Maintenance from './components/Addiv/Maintenance/maintenance';
import Transpo from './components/Addiv/Transpo/transpo';
import Wmo from './components/Addiv/Wmo/wmo';


function App() {
  return (
    <>
      <div className="App">
          <Routes>
          <Route path="/" exact element={ <Home/> } />
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
        <Route path="/mss" element={ <Mss/> } />
        <Route path="/pharma" element={ <Pharma/> } />
        <Route path="/radio" element={ <Radio/> } />
        <Route path="/pt" element={ <Pt/> } />
        <Route path="/rt" element={ <Rt/> } />
        <Route path="/chiefnurse" element={ <ChiefNurse/> } />
        <Route path="/asstchiefnurse" element={ <AsstChiefNurse/> } />
        <Route path="/infeccont" element={ <Infeccont/> } />
        <Route path="/superv" element={ <Superv/> } />
        <Route path="/headnurse" element={ <Headnurse/> } />
        <Route path="/asstheadnurse" element={ <Asstheadnurse/> } />
        <Route path="/chargenurse" element={ <Chargenurse/> } />
        <Route path="/staffnurse" element={ <Staffnurse/> } />
        <Route path="/midwives" element={ <Midwives/> } />
        <Route path="/naclerks" element={ <Naclerk/> } />
        <Route path="/csr" element={ <Csr/> } />
        <Route path="/accounting" element={ <Accounting/> } />
        <Route path="/billing" element={ <Billing/> } />
        <Route path="/cashier" element={ <Cashier/> } />
        <Route path="/hr" element={ <Hr/> } />
        <Route path="/admitting" element={ <Admitting/> } />
        <Route path="/cwu" element={ <Cwu/> } />
        <Route path="/linen" element={ <Linen/> } />
        <Route path="/mrd" element={ <Mrd/> } />
        <Route path="/it" element={ <It/> } />
        <Route path="/property" element={ <Property/> } />
        <Route path="/to" element={ <To/> } />
        <Route path="/maintenance" element={ <Maintenance/> } />
        <Route path="/transpo" element={ <Transpo/> } />
        <Route path="/wmo" element={ <Wmo/> } />
          </Routes>
      {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
