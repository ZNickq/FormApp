export const UPDATE_QUESTION = 'UPDATE_QUESTION'

export function updateQuestion(id, question, answers) {
  return { type: UPDATE_QUESTION, id: id, question: question, answers: answers }
}