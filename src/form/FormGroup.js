import React from 'react'
import RadioQuestion from './RadioQuestion'
import CheckboxQuestion from './CheckboxQuestion'
import TextQuestion from './TextQuestion'
import DateQuestion from './DateQuestion'
import DropdownQuestion from './DropdownQuestion'

const FormGroup = (props) => {

  const data = props.data

  return (<div>
    {data.map((each, index) => {
      switch (each.type) {
        case "radio_button":
          return <RadioQuestion key={index} data={each} />
        case "checkbox":
          return <CheckboxQuestion key={index} data={each} />
        case "text":
          return <TextQuestion key={index} data={each} />
        case "date":
          return <DateQuestion key={index} data={each} />
        case "dropdown":
          return <DropdownQuestion key={index} data={each} />
        default:
          return <div key={index}>Could not render!</div>
      }
    })}
  </div>)
}

export default FormGroup;