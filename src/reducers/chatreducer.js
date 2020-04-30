const chatreducer=(state=[],action)=>{
    switch(action.type) {
        case "CHAT":
            return [ ...state,action.payload]
             
        case "DELETE":
            let newState = [...state];
            newState.splice(action.payload, 1);
            return newState;   
            
           
        default:
           return  state;
   
}
}

export default chatreducer;