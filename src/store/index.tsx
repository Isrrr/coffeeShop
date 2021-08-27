import { createStore, combineReducers } from 'redux'
import { mainReducer } from './reducers/mainReducer'

const rootReduser = combineReducers({
  main: mainReducer
})
const Store = createStore(rootReduser)

export { Store }
