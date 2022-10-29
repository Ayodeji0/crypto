import React from "react";
import Header from "../header/Header";
import SecondContent from "../secondcontent/SecondContent";
import ThirdSection from "../thirdsection/ThirdSection";
import FifthSection from "../fifthsection/FifthSection";
import FourthSection from "../fourthsection/FourthSection";
import Carousel from "../carouselsection/Carousel";
import Unlimited from "../unlimited/Unlimited";
import WaitListPage from "../waitlistpage/WaitListPage";
import Unbeatable from "../unbeatable/Unbeatable";
import RegulatoryInfo from "../regulatoryinfo/RegulatoryInfo";
import Footer from "../footer/Footer";
function Home() {
  return (
    <div>
      <Header />
      <SecondContent />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Carousel />
      <Unlimited />
      <WaitListPage />
      <Unbeatable />
      <RegulatoryInfo />
      <Footer />
    </div>
  );
}

export default Home;
