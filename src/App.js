import './App.css';
import { Box, Paper, Typography, Button } from '@material-ui/core'
import ModexFormGroup from './Form/ModexFormGroup'
import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { prettyPrintForm } from './utils'

function App() {

  const [sections, setSections] = React.useState([[]])
  const [activeSection, setActiveSection] = React.useState(0)
  const activeData = sections[activeSection]

  const formRedux = useSelector(state => state.form)

  useEffect(() => {
    fetch('data/quiz.json').then(res => {
      return res.json()
    }).then(res => {
      setSections(res)
    })
    return () => {}
  }, [])

  const handleSubmit = useCallback((e) => {
    if (activeSection + 1 === sections.length) {
      const pretty = prettyPrintForm(formRedux)
      console.log(pretty)

      const element = document.createElement("a");
      const file = new Blob([pretty], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = "form.txt";
      document.body.appendChild(element);
      element.click();
    } else {
      e.preventDefault()

      setActiveSection(activeSection + 1)
    }

    return false;
  }, [formRedux, activeSection, sections.length])

  return (
    <div className="App">
      <Box p={10}>
        <Paper elevation={3}>
          <Box p={3}>
            <Typography gutterBottom>
              Step {activeSection + 1} / {sections.length}
            </Typography>
            <form onSubmit={handleSubmit}>
              <ModexFormGroup data={activeData}></ModexFormGroup>
              <Box pt={2}>
                <Button variant="contained" type="submit">
                  {activeSection + 1 === sections.length ? "Finish" : "Next"}
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Box>
    </div >
  );
}

export default App;
