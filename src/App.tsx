import React from 'react';
import{BrowserRouter , Routes, Route} from 'react-router-dom'
import Footer from './component/footer/Footer';
import Main from './component/main/Main';
import Navbar from './component/nav/Navbar';
import About from './pages/about/About';
import Contacts from './pages/contact/Contacts';
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects';
import Services from './pages/services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar/>
    {/* <Main/> */}
    <Routes>
    <Route  path="/" element={<Main id={''} image={''} quote={''} name={''} position={''}/>} />

      <Route path='/' element={<About/>}/>
       
      <Route path='/services' element={ <Services/>}/>

      <Route path='/projects' element={<Projects/>}/>

      <Route path='/contact' element={<Contacts/>}/>
    </Routes>
   
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
