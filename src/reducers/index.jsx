import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';

export default createStore(combineReducers({
  form: reduxFormReducer,
}))
