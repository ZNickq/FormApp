import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { updateQuestion } from '../store/actions'

const RadioQuestion = (props) => {

  const data = props.data
  const [value, setValue] = React.useState(null)

  const dispatch = useDispatch()
  const handleChange = useCallback((e) => {
    const value = e.target.value

    dispatch(updateQuestion(data.id, data.question, value))

    setValue(value)
  }, [data.id, data.question, dispatch])

  return (<div>
    <FormControl required={data.required} component="fieldset">
      <FormLabel component="legend">{data.question}</FormLabel>
      <RadioGroup aria-label={data.question} name={data.question} value={value} onChange={handleChange}>
        {data.answers.map((each, key) => {
          return <FormControlLabel key={key} value={each} control={<Radio required={data.required} />} label={each} />
        })}
      </RadioGroup>
    </FormControl>
  </div >)
}

export default RadioQuestion;