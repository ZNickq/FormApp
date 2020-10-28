import { Box, Paper } from '@material-ui/core'
import React, { } from 'react'
import Form from './form'

function App() {

  return (
    <div className="App">
      <Box p={10}>
        <Paper elevation={3}>
          <Box p={3}>
            <Form />
          </Box>
        </Paper>
      </Box>
    </div >
  );
}

export default App;
