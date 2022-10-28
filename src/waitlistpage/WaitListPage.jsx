import React, {useState} from "react";
import "./waitlistpage.css";
import {
  FaTelegram,
  FaWhatsapp,
  FaSnapchat,
  FaSkype,
  FaDiscord,
  FaViber,
  FaSignal,
  FaPager,
  FaCheck,
  FaTeamspeak,
} from "react-icons/fa";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function WaitListPage() {
  const [value, setValue] = useState('+1')
  return (
  // main container
    <main className="waitlistContainer">
      <div className="waitContainerA">
        {/* first container */}
        <div className="waitlistContainerA">
          <div className="waitingListAccess">
            {/* title */}
            <p className="waitlisttitle">Join our Waiting List</p>
            {/* set of first icons */}
            <div className="waitlistIconsA">
              <FaTelegram />
              <FaWhatsapp />
              <FaSnapchat />
              <FaSkype />
              <FaDiscord />
            </div>
            <div className="waitlistIconsB">
            <FaViber />
            <FaSignal />
            <FaPager/>
            <FaCheck/>
            <FaTeamspeak/>
            </div>
            {/* phone-input needs styling and resuable  */}
            <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
            className="waitPhone"/>
            textInputStyle={}
            </div>
        
          <div className="waitListrContentlist">
          <a href="#waitlist" className="waitListContentbutton">
            Join waitlist
          </a>
        </div>
        </div>
        <div className="waitlistContainerB">
          <h4>Join Waitlist</h4>
          <p className="waitlistparagraph">
            Be connected. Be a part of the next generation of <br />{" "}
            Ultainfinity millionaires. There are over a million people <br />{" "}
            waiting, but there is still enough space for you.
          </p>
        </div>
      </div>
      <div className="waitlistContainerBottom">
        <div>
          <h3 className="waitlistTitle">Join Our Community</h3>
        </div>
        <h2 className="waitlistSubscribe">Subscribe</h2>
        <p className="waitlistinfo">
          Subscribe to our Community Channels to get regular updates, our group
          developments <br /> and free Airdrops & Bounties of Cryptocurrencies.
        </p>
        <div>icons icons icons icons</div>
        <div className="waitlistInvestorButton">
          <a href="#investor" className="waitlistanchor">
            Investor Brochure
          </a>
        </div>
      </div>
    </main>
  );
}

export default WaitListPage;
