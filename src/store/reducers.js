import { UPDATE_QUESTION } from './actions'

const initialState = {
  form: []
}

export function modexReducers(state = initialState, action) {
  switch (action.type) {
    case UPDATE_QUESTION:
      return { ...state, form: { ...state.form, [action.id]: { answers: action.answers, question: action.question } } }
    default:
      return state
  }
}