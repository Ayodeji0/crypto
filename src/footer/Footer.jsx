import React from 'react'
import './footer.css'
import moment from 'moment/moment'

function Footer() {
    const m = moment()
  return (
    <section className='footerSection'>
        <p className='footer'>
        &copy; {`Copyright Ultainfinity Global Group ${m.format("YYYY")}`}
        </p>
    </section>
  )
}

export default Footer