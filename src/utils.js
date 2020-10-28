import moment from 'moment'

export const prettyPrintForm = (formR) => {
  let prettyForm = ""
  console.log("FOOORM:")
  console.log(formR)

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