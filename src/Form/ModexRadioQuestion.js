import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import React from 'react'

const ModexRadioQuestion = (props) => {

  const data = props.data
  const [value, setValue] = React.useState(null)

  return (<div>
    <FormControl component="fieldset">
      <FormLabel component="legend">{data.question}</FormLabel>
      <RadioGroup aria-label={data.question} name={data.question} value={value} onChange={(e) => { setValue(e.target.value) }}>
        {data.answers.map((each, key) => {
          return <FormControlLabel key={key} value={each} control={<Radio />} label={each} />
        })}
      </RadioGroup>
    </FormControl>
  </div>)
}

export default ModexRadioQuestion;