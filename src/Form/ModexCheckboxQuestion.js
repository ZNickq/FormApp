import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { updateQuestion } from '../store/actions'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const ModexCheckboxQuestion = (props) => {

  const data = props.data

  const answers = data.answers

  const [state, setState] = React.useState(answers.reduce((a, x) => ({ ...a, [x]: false }), {}));

  const dispatch = useDispatch()
  const handleChange = useCallback((event) => {
    const newState = { ...state, [event.target.name]: event.target.checked }

    const checked = Object.keys(newState).filter(e => newState[e] === true)

    dispatch(updateQuestion(data.id, data.question, checked))
    setState(newState)
  }, [data.id, data.question, dispatch, state])


  const anyChecked = Object.values(state).filter(each => each === true).length === 0
  return (
    <div>
      <FormControl required={data.required} component="fieldset">
        <FormLabel component="legend">{data.question}</FormLabel>
        <FormGroup>
          {answers.map((each, key) => {
            return <FormControlLabel
              key={each}
              control={<Checkbox required={anyChecked} checked={state[each]} onChange={handleChange} name={each} />}
              label={each}
            />
          })}
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default ModexCheckboxQuestion;