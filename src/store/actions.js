export const UPDATE_QUESTION = 'UPDATE_QUESTION'
export const RESET_FORM = 'RESET_FORM'

export function updateQuestion(id, question, answers) {
  return { type: UPDATE_QUESTION, id: id, question: question, answers: answers }
}

export function resetForm() {
  return { type: RESET_FORM }
}
