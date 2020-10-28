import { FormControl, FormLabel, Select, MenuItem } from '@material-ui/core'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { updateQuestion } from '../store/actions'

const DropdownQuestion = (props) => {

  const data = props.data
  const [value, setValue] = React.useState("")

  const dispatch = useDispatch()
  const handleChange = useCallback((e) => {
    const value = e.target.value

    dispatch(updateQuestion(data.id, data.question, value))

    setValue(value)
  }, [data.id, data.question, dispatch])

  return (<div>
    <FormControl required={data.required} component="fieldset">
      <FormLabel component="legend">{data.question}</FormLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={value}
        onChange={handleChange}
      >
        {data.answers.map((each, key) => {
          return <MenuItem key={key} value={each}> {each} </MenuItem>
        })}
      </Select>
    </FormControl>
  </div >)
}

export default DropdownQuestion;