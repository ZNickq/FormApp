import './App.css';
import { Box, Paper, Typography, Button } from '@material-ui/core'
import { formData } from './data'
import ModexFormGroup from './Form/ModexFormGroup'
import React from 'react'

function App() {

  const sections = formData
  const [activeSection, setActiveSection] = React.useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const target = e.target

    console.log(Object.keys(target))
    console.log(target[0])
    return false;
  }

  return (
    <div className="App">
      <Box p={10}>
        <Paper elevation={3}>
          <Box p={3}>
            <Typography gutterBottom>
              Step {activeSection + 1} / {sections.length}
            </Typography>
            <form onSubmit={handleSubmit}>
              <ModexFormGroup data={sections[activeSection]}></ModexFormGroup>
              <Box pt={2}>
                <Button variant="contained" type="submit">
                  {activeSection + 1 === sections.count ? "Next" : "Finish"}
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
