import './App.css';
import Header from './header/Header';
import SecondContent from './secondcontent/SecondContent';
import ThirdSection from './thirdsection/ThirdSection';
import FifthSection from './fifthsection/FifthSection';
import FourthSection from './fourthsection/FourthSection';
import Carousel from './carouselsection/Carousel';
import Unlimited from './unlimited/Unlimited'



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
    </div>
  );
}

export default App;
