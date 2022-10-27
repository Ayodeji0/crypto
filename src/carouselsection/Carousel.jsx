import React from "react";
// import { datas } from "../data";
import "./carousel.css";

function Carousel() {
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
        <div className="carouseldata">
          <p>
           carousel heading
          </p>
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

export default Carousel;
