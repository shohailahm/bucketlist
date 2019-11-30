const initialState={
    todos:[{name:'default bucket',lists:[]}]
}

export default (state = initialState, action)=>{
   switch (action.type) {
       case 'UPDATE':
           return {...state,todos:action.data}
       default:
           return state;
   }
}