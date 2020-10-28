import { modexRedux } from './reducers'
import { createStore } from 'redux'


export const store = createStore(modexRedux)