import { TextField } from '@material-ui/core'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { updateQuestion } from '../store/actions'

const ModexTextQuestion = (props) => {

  const data = props.data
  const [value, setValue] = React.useState("")

  const dispatch = useDispatch()
  const handleChange = useCallback((e) => {
    const value = e.target.value

    dispatch(updateQuestion(data.id, data.question, value))

    setValue(value)
  }, [data.id, data.question, dispatch])

  return (<div>
    <TextField
      id={data.question}
      label={data.question}
      value={value}
      required={data.required}
      onChange={handleChange}
    />
  </div>)
}

export default ModexTextQuestion;