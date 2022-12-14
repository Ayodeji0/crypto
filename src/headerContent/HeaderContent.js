import React from "react";
import "./headercontent.css";

function HeaderContent() {
  return (
    <div className="ContentContainer">
      <div className="headerContentContainer">
        <div className="headerContentContainer1">
          <h2 className="headerContentTitle">
            The world’s  largest  dual  wealth generator
          </h2>
        </div>
        <div className="headerContentParagraph">
          <p>
            Cryptocurrency airdrops and bounties program.
            <br />
            The biggest crypto giveaway ever, <br />
            totalling hundreds of billions of dollars.
          </p>
        </div>
        <div className="headerContentConatinerAirdrop">
          <p>
            The World’s first $300 billion+ <br />
            Airdrops Ever
          </p>
        </div>
         <div className="waitListrContentlist"> 
          <a href="#waitlist" className="headerContentwaitbutton">
            Join waitlist
          </a>
        </div> 
      </div>

      <div className="headerContentContainer2">
        <div className="headerContentContainer2image">
          {/* <img src={require('../images/backimage.png')}alt='awesome'/> */}
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;






 // const [index, setIndex] = useState(0)

  // const handleSlide =(direction) =>{
  //   if(direction === right){
  //     setIndex(index !==0 ? index-1 : 4)
  //   }
  //   if(direction === left){
  //     setIndex(index !==4 ? index+1 : 0)
  //   }
  // }
