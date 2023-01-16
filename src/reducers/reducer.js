const reducer = (state, action) => { 

    //if no state already exist, then the reducer is responsible for creating it

    if(state === undefined){
        state = {
            items: []
        }
    }


    //look for a matching action 


    switch(action.type){

        case "ADD_ITEM": 
            return {
                ...state, 
                items:  state.items.concat(action.data)
            }
        case "REMOVE_ITEM": 
            return {
                ...state, 
                items: state.items.filter(item =>{
                    return item.id !== action.id // 3 != 3
                })
            }

        default: 
            return state;
    }

}
export default reducer;
