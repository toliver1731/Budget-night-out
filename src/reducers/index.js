
//Function that takes in key value pairs: key = name of reducer, value = reducer function itself
import { combineReducers } from 'redux';
//keeps track of locations; starting point and ending point
import locationReducer from './locationReducer';
//All the uber products
import productsReducer from './productsReducer';

//rootReducer stores results of key value pairs
const rootReducer = combineReducers({
  location: locationReducer,
  products: productsReducer
})

export default rootReducer;
