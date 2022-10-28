import './App.css';
import Header from './header/Header';
import SecondContent from './secondcontent/SecondContent';
import ThirdSection from './thirdsection/ThirdSection';
import FifthSection from './fifthsection/FifthSection';
import FourthSection from './fourthsection/FourthSection';
import Carousel from './carouselsection/Carousel';
import Unlimited from './unlimited/Unlimited'
import WaitListPage from './waitlistpage/WaitListPage';
import Unbeatable from './unbeatable/Unbeatable';
import RegulatoryInfo from './regulatoryinfo/RegulatoryInfo';
import Footer from './footer/Footer';
 import Resources from './Pages/resources/Resources';
 import RoadMaps from './Pages/roadmaps/RoadMaps';
 import WhitePaper from './Pages/whitepaper/WhitePaper';
 import Terms from './Pages/terms/Terms';
 import PrivatePolicy from './Pages/privatepolicy/PrivatePolicy';
 import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

function App() {
  return (
    <div className="App">
       
     <Header/>
     <SecondContent/>
     <ThirdSection/>
     <FourthSection/>
      <FifthSection/>
      <Carousel/>
      <Unlimited/>
      <WaitListPage/>
      <Unbeatable/>
      <RegulatoryInfo/>
      <Footer/>
      <Router>
        <Routes> 
       <Route path="/privacy" element={<PrivatePolicy/>}/>
      <Route path="/terms" element={ <Terms/>}/>
      <Route path="/resources" element={<Resources/>}/>
      <Route path="/roadmaps" element={<RoadMaps/>}/>
      <Route path="/whitepaper" element={<WhitePaper/>}/> 
       </Routes>
      </Router> 
    </div>
  );
}

export default App;
