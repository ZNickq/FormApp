import { Box, Typography, Button } from '@material-ui/core'
import FormGroup from './FormGroup'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { prettyPrintForm, downloadFile } from '../utils'

function Form() {

  const [sections, setSections] = React.useState([[]])
  const [activeSection, setActiveSection] = React.useState(0)
  const activeData = sections[activeSection]

  const formRedux = useSelector(state => state.form)

  const asyncGetQuiz = async () => {
    const res = await fetch('data/quiz.json')
    setSections(await res.json())
  }
  useEffect(() => {
    asyncGetQuiz()
  }, [])

  const handleSubmit = (e) => {
    if (activeSection + 1 === sections.length) { // We're done, submit the form
      const pretty = prettyPrintForm(formRedux)
      console.log(pretty)
      downloadFile("form", pretty)
    } else { // Go to next page
      e.preventDefault()

      setActiveSection(activeSection + 1)
    }

    return false;
  }

  return (
    <div>
      <Typography gutterBottom>
        Step {activeSection + 1} / {sections.length}
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormGroup data={activeData}></FormGroup>
        <Box pt={2}>
          <Button variant="contained" type="submit">
            {activeSection + 1 === sections.length ? "Finish" : "Next"}
          </Button>
        </Box>
      </form>
    </div >
  );
}

export default Form;
