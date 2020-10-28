import React from 'react'
import ModexRadioQuestion from './ModexRadioQuestion'
import ModexCheckboxQuestion from './ModexCheckboxQuestion'
import ModexTextQuestion from './ModexTextQuestion'
import ModexDateQuestion from './ModexDateQuestion'
import ModexDropdownQuestion from './ModexDropdownQuestion'

const ModexFormGroup = (props) => {

  const data = props.data

  return (<div>
    {data.map((each, index) => {
      if (each.type === "radio_button") {
        return <ModexRadioQuestion key={index} data={each} />
      }
      if (each.type === "checkbox") {
        return <ModexCheckboxQuestion key={index} data={each} />
      }
      if (each.type === "text") {
        return <ModexTextQuestion key={index} data={each} />
      }
      if (each.type === "date") {
        return <ModexDateQuestion key={index} data={each} />
      }
      if (each.type === "dropdown") {
        return <ModexDropdownQuestion key={index} data={each} />
      }
      return <div key={index}>Could not render!</div>
    })}
  </div>)
}

export default ModexFormGroup;