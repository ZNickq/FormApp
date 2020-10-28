import React from 'react'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const ModexDateQuestion = (props) => {

  const data = props.data
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'))

  return (<div>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="d/mm/yyyy"
        margin="normal"
        id="date-picker-inline"
        label={data.question}
        value={value}
        onChange={setValue}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  </div>)
}

export default ModexDateQuestion;