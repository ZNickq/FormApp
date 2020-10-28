import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateQuestion } from '../store/actions'
import moment from 'moment'

const ModexDateQuestion = (props) => {

  const data = props.data
  const [value, setValue] = React.useState(moment())

  const dispatch = useDispatch()
  const handleChange = useCallback((value) => {
    dispatch(updateQuestion(data.id, data.question, value.toDate()))
    setValue(value)
  }, [data.id, data.question, dispatch])

  useEffect(() => {
    handleChange(moment())
  }, [handleChange])

  return (<div>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        disableToolbar
        required={data.required}
        variant="inline"
        format="d/mm/yyyy"
        margin="normal"
        id="date-picker-inline"
        label={data.question}
        value={value}
        onChange={handleChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  </div>)
}

export default ModexDateQuestion;