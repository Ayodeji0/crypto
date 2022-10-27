import React from "react";
import "./regulatoryinfo.css";

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
        <ul>
            <li><a href="#policy">Privacy Policy</a></li>
            <li><a href="#roadmap">Roadmaps</a></li>
            <li><a href="#whitepaper">Whitepaper</a></li>
            <li><a href="#resources">Resources</a></li>
        </ul>
      </div>
    </div>
  );
}

export default RegulatoryInfo;
