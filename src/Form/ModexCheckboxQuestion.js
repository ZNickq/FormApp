import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const ModexCheckboxQuestion = (props) => {

  const data = props.data

  const answers = data.answers

  const [state, setState] = React.useState(answers.reduce((a, x) => ({ ...a, [x]: false }), {}));


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
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