import React, {useState} from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function Phone() {
    const [value, setValue] = useState('+1')
  return (
    <div className="waitPhoneContainer" >
            <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
            className="waitPhone"/>
            </div>
  )
}

export default Phone