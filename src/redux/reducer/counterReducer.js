import * as ACTION from '../action/counterAction'

const INITIAL_STATE = {
  counter: 0
}

export default function counterReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ACTION.INCREMENT_COUNTER: 
      return {
        counter: state.counter + 1
      }
    case ACTION.DECREMENT_COUNTER:
      return {
        counter: state.counter - 1
      }
    default: return state
  }
}