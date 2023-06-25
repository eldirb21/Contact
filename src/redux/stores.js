import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';
import rootReducer from './reducers';

const stores = configureStore({reducer: rootReducer}, applyMiddleware(thunk));

export default stores;
