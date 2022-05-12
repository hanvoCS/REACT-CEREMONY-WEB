import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import {BrowserRouter as Router, Link, 
  Routes, Route} from 'react-router-dom'
  import Navbar from './components/Navbar'
  import Footer from "./components/footer";
  import Home from './pages'
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import loding from "./fetuers/loding";
import Admin from "./pages/admin";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

function App() {
  return (
    <>
   
     
     <Router>
     <Navbar />
    <Routes>
    
      <Route exact path="/" element={<Home></Home>}  />
      <Route path='/about' element={<About></About>} />
        <Route path='/services' element={<Services></Services>} />
        <Route path='/contact-us' element={<Contact></Contact>} />
        <Route path="/sign-up"element={<AppContainer><AccountBox /></AppContainer>} />
        <Route path='/signin' element={<AppContainer><AccountBox /></AppContainer>} />
        <Route path='/admine' element={<Admin></Admin>} />
    </Routes>
    <Footer />
    </Router>
  

 </>
  );
}

export default App;
