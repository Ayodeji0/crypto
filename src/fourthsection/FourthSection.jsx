import React from 'react'
import './fourthsection.css'

function FourthSection() {
  return (
    <section className="fourthContentContainer">
        
    <div>
    <div className="fourthConatiner">
    <h3 className="fourthcontainerTitle1">Who We Are</h3>
    <p className="fourthcontainerparagraph">Ultainfinity Global Group</p>
    <p className="fourthcontainerparagrap2">We Power Wealth Renaissance, Easy & Real</p>
    </div>
    <div className="fourthcontainerwidget">
      <div className="fourthcontainerwidgetContainer">
        <p className="fouthContentParagraph">
          We are, undoubtedly and indubitably the biggest thing to have
          happened to the cryptocurrency industry after the big success of
          2009. We are a group spread around over 40 countries and every
          continent of the world that is committed to driving wealth
          amongst cryptocurrency users through our state-of-the-art
          blockchain technology, astute financial models, unique features,
          systems and our impetus to innovate, generate and commence the
          new wealth era in cryptocurrency.
        </p>
      </div>
     
      <img
        src={require("../images/award.png")}
        alt="award"
        className="image"
      />
    </div>
    <div className="fourthcontainerwidget2">
        <div className="fourthcontainerTitle">
          <div><h3 className="fourthcontainerTitle2">Our Vision</h3></div>

      <div className="fourthcontainerwidgetContainer2">  
        <p className="fouthContentParagraph">
          At the centre of everything we do is WEALTH. We exist to create
          wealth for the 7.8 billion people in the world, ensuring that
          everyone has an equal chance at it and ending generational
          poverty for good. Our vision is to bring to life an era of
          supercharged and stable wealth through our cryptocurrency
          offerings. In other words, create a world where significant
          wealth is possible, accessible and easier.
        </p>
      </div>
      </div>
      <img
        src={require("../images/award2.png")}
        alt="award2"
        className="image2"
      />
    </div>
  </div>
  <div></div>
</section>
  )
}

export default FourthSection