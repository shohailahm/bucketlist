import todo from '../src/store/reducer';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


export const storeFactory=(initalState)=>{
  return createStore(todo,initalState,applyMiddleware(thunk));
}

export const findByTestAttr=(wrapper,val)=>{
    return wrapper.find(`[data-test="${val}"]`);
 }
 
