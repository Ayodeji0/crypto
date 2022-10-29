import React from "react";
import "./regulatoryinfo.css";
import { Link } from "react-router-dom";

function RegulatoryInfo() {
  return (
    <div className="regulatoryinfoContainer">
      <div className="regulatoryinfoContainerA" >
        <p >
          Important to note, trading in cryptocurrencies and in particular
          synthetic assets comes with risks. You can lose all your investment.<br/>
          Furthermore, trading in cryptocurrencies generally and trading on
          ULTAINFINITY Exchange UTTA, DIVIT or any assets on our <br/> platforms are
          not regulated by any Financial Authority.
        </p>
      </div>
      <div className="regulatoryinfoContainerB">
                 <Link to="/privacy"  className="regulatoryinfoContainerLink">Privacy</Link> 
                 <Link to="/terms" className="regulatoryinfoContainerLink">Terms</Link> 
                 <Link to="/resources" className="regulatoryinfoContainerLink">Resources</Link> 
                 <Link to="/roadmaps" className="regulatoryinfoContainerLink">Roadmaps</Link> 
                 <Link to="/whitepaper" className="regulatoryinfoContainerLink">Whitepaper</Link> 
      </div>
    </div>
  );
}

export default RegulatoryInfo;
