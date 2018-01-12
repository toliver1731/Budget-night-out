import { FIND_PRODUCTS } from '../actions/index.js';

const INIT_STATE = [];



export default (state = INIT_STATE, action) =>{
  switch(action.type) {
    case FIND_PRODUCTS:
      return action.payload;
    default: return state;
  }
}
