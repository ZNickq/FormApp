import { TextField } from '@material-ui/core'
import React from 'react'

const ModexTextQuestion = (props) => {

  const data = props.data
  const [value, setValue] = React.useState("")

  return (<div>
    <TextField
      id={data.question}
      label={data.question}
      value={value}
      required={data.required}
      onChange={(e) => { setValue(e.target.value) }}
    />
  </div>)
}

export default ModexTextQuestion;