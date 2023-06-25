import {combineReducers} from 'redux';
import contactReducer from './contact.reducers';

export default combineReducers({
  contact: contactReducer,
});
