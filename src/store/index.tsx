import { createStore, combineReducers } from 'redux'

// import { appReducer } from './reducers/app'

const rootReduser = combineReducers({
  // app: appReducer,
})
const Store = createStore(rootReduser)

export { Store }
