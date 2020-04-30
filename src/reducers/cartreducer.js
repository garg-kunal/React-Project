   
const cartreducer=(state=[],action)=>{
    switch(action.type) {
        case "ADD":
            return [ ...state,action.payload]
             
        case "SUB":
            let newState = [...state];
            newState.splice(action.payload, 1);
            return newState;   
            
           
        default:
           return  state;
   
}
}

export default cartreducer;