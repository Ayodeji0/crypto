import React from "react";
import {datas} from "../data"
import "./thirdsection.css";

function ThirdSection() {
  return (
    <div className="thirdSectionContainer">
      <main className="thirdSectionMain">
        <div className="thirdsectionTitleContainer">
          <h3 className="thirdsectionTitle">Overview</h3>
          <div className="thirdSectionParagrahContainer">
            <p className="thirdSectionParagrah">Giveaways Like Never Seen.</p>
            <p className="thirdSectionParagrah">
              This Airdrop & Bounty Experience Comes With A Huge Smile
            </p>
          </div>
        </div>
        <div className="thirdsectionwidgetContainer">
          {datas.map((item) => (
            <div key={item.id} className="thirdsectionwidgetContainerParagraph">
              <p>{item.word}</p>
            </div>
          ))}
        </div>
      </main> 
    </div>

  );
}

export default ThirdSection;
