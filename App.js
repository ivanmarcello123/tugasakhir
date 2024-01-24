
import './App.css';
import Header from './header';
// import logo  from './pantai.jpg'
import Navbar from './navbar/navbar';
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import main from './navbar/main';
import contact from './navbar/contact';
import about from './navbar/about';
function App() {
  
  return (
    
    <div className="App">
      <Header></Header>
      {/* router */}
      <Router>
        <Navbar/>
        <Routes>
          <Route index element={<main/>}/>
          <Route path= "/about" element={<about/>}/>
          <Route path="contact"element={<contact/>}/>
        </Routes>
      </Router>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <h2>
           <code>tempat mencari wisata</code> klik "lanjutkan" untuk melanjutkan.
           </h2>
        </p>
        <a
          className="App-link"
          href="https://www.traveloka.com/id-id?id=8345659813218651462&adloc=id-id&kw=8345659813218651462_traveloka&gmt=e&gn=g&gd=c&gdm=&gcid=682930930290&gdp=&gdt=&gap=&pc=1&cp=8345659813218651462_ID_TV_SM_AU_DE_Google_RSA_ID_BRA_Traveloka_8345659813218651462_&aid=153411186215&wid=kwd-51659214310&fid=&gid=9120064&kid=_k_EAIaIQobChMItLiLmcD1gwMVMxqDAx1CrAbnEAAYASAAEgJV-fD_BwE_k_&utm_id=EFKgiZPd&ad_id=682930930290&target_id=kwd-51659214310&click_id=EAIaIQobChMItLiLmcD1gwMVMxqDAx1CrAbnEAAYASAAEgJV-fD_BwE&group_id={adgroupid)&gclid=EAIaIQobChMItLiLmcD1gwMVMxqDAx1CrAbnEAAYASAAEgJV-fD_BwE"
          target="_blank"
          
          rel="noopener noreferrer"
        >
          Lanjutkan
        </a>
      </header>
    </div>
  );
}

export default App;
