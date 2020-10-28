import moment from 'moment'

// Can be easily converted to JSON or w/e format a server requires.
export const prettyPrintForm = (formR) => {
  let prettyForm = ""

  Object.keys(formR).forEach(eachID => {
    const { question, answers } = formR[eachID]
    prettyForm += `${question}\n`
    //Types of answers, string, date, array of strings
    if (Array.isArray(answers)) {
      answers.forEach(each => {
        prettyForm += `${each}, `
      })
    } else if (answers instanceof Date) {
      prettyForm += moment(answers).format("d/mm/yyyy")
    } else {
      prettyForm += answers
    }
    prettyForm += '\n\n'
  })
  return prettyForm
}

export const downloadFile = (name, text) => {
  const element = document.createElement("a");
  const file = new Blob([text], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = `${name}.txt`;
  document.body.appendChild(element);
  element.click();
}