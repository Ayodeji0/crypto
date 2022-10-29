import React from "react";
import { sliders } from "../data";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./carousel.css";


function CarouselPage() {
  return (
    <div className="carouselContainer">
      <div className="carouselFirstContainer">
        <div>
          <h1 className="carouselContainerTitle">Learn More About</h1>
          <p className="carouselContainersubTitle">
            Ultainfinity Airdrops & Bounties Programs
          </p>
        </div>
        <div className="carouselstatements">
          <p className="carouselParagraph">
            All airdrop and bounty users get automatically a locked wallet, with
            a minimum credit balance of $1,000. To semi-unlock, each Batch of
            $1,000 will require 3 referrals. All airdropped new users shall have
            a SPECIAL AIRDROP UTTA TOKENS referral code which the new registrant
            will use in their registration process. The Airdrops and Bounties
            are poised to bring about superfluous earnings in 4 ways or through
            4 alternatives:
          </p>
        </div>
        {/* carosel contents */}
        <div className="carouselsliderContainer">
            <div className="sliderContain">
           <div className="sliderWrapper"></div>
            </div>
          <div>
            <div className="slidercontainer" >
              <div className="slidercontainerA">
              <ArrowBackIosIcon  className="sliderButton2"/>
              </div>
              <div className="slidcontainerB">
              <ArrowForwardIosIcon className="sliderButton1"/>
              </div>
            </div>
          </div>
        </div>

        <div className="carouselminidata">
          <p className="carouselminidataparagraph">
            The exchanged cryptocurrency transactions (in Alternatives #3 & #4)
            must be approved by Ultainfinity for the user to be converted to an
            SRU (successfully released user). Successful Released User (SRU) on
            Ultainfinity Airdrop & Bounty platform also automatically gets an
            account created for them on the Ultainfinity Wealth LaunchPad
            platform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarouselPage;

// {
//    {sliders.map(({id, title, subtitle, info})=>(
//    <div key={id} className="sliderContent">
//    <h1>{title}</h1>
//    <h3>{subtitle}</h3>
//    <p>{info}</p>
 
 
// }
