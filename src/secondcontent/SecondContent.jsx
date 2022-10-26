import React from "react";
import "./secondContent.css";

function SecondContent() {
  return (
    <div className="secondContainer">
      <div className="secondContentConatiner">
        <h3 className="secondContainerTitle">An experience like never before.</h3>
        <div>
          <p className="secondContainerSubtitle">
            Find out why the Ultainfinity Airdrops and Bounties is the <br/> Biggest
            ever Airdrops & Bounty Program.
          </p>
        </div>
      </div>
      <div>
        <img src={require('../images/awesome.png')}alt="Awesome"/>
      </div>
    </div>
  );
}

export default SecondContent;
