import './App.css';
import { Box, Paper } from '@material-ui/core'
import { formData } from './data'
import ModexFormGroup from './Form/ModexFormGroup'

function App() {

  const data = formData

  return (
    <div className="App">
      <Box p={10}>
        <Paper elevation={3}>
          <Box p={3}>
            <form>
              {data.map((each, index) => {
                return (<ModexFormGroup data={each} key={index}></ModexFormGroup>)
              })}
            </form>
          </Box>
        </Paper>
      </Box>
    </div >
  );
}

export default App;
