import { modexReducers } from './reducers'
import { createStore } from 'redux'

export const store = createStore(modexReducers)