import { UPDATE_QUESTION, RESET_FORM } from './actions'

const initialState = {
  form: []
}

export function modexRedux(state = initialState, action) {
  switch (action.type) {
    case UPDATE_QUESTION:
      return { ...state, form: { ...state.form, [action.id]: { answers: action.answers, question: action.question } } }
    case RESET_FORM:
      return initialState
    default:
      return state
  }
}