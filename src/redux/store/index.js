import  { combineReducers } from 'redux'

import CounterReducer from '../reducer/counterReducer'

const rootReducer = combineReducers({
  counterState: CounterReducer
})

export default rootReducer