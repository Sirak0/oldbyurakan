
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Section2 from './Components/Section2/Section2';
import Section3 from './Components/Section3/Section3';
import Booking from './Components/Booking/Booking';
import { Provider } from "react-redux";
import store from './Store/Store';
import Footer from './Components/Footer/Footer';
import Section4 from './Components/Section4/Section4';
import Section5 from './Components/Section5/Section5';
import SectionRoom from './Components/SectionRoom/SectionRoom';
import Contacts from './Components/Contacts/Contacts';



function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Booking />
        
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/about' element={<Section2 />}></Route>
          <Route path='/servises' element={<Section3 />}></Route>
          <Route path='/rooms' element={<Section5/>}></Route>
          <Route path='/room' element={<SectionRoom/>}></Route>
          <Route path='/contacts' element={<Contacts/>}></Route>
        </Routes>
        <Section4/>
        <Footer />
      </Provider>
    </Router >
  );
}

export default App;
