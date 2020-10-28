import { FormControl, FormLabel, Select, MenuItem } from '@material-ui/core'
import React from 'react'

const ModexDropdownQuestion = (props) => {

  const data = props.data
  const [value, setValue] = React.useState("")

  return (<div>
    <FormControl required={data.required} component="fieldset">
      <FormLabel component="legend">{data.question}</FormLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={value}
        onChange={(e) => { setValue(e.target.value) }}
      >
        {data.answers.map((each, key) => {
          return <MenuItem key={key} value={each}> {each} </MenuItem>
        })}
      </Select>
    </FormControl>
  </div >)
}

export default ModexDropdownQuestion;