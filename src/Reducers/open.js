const initState = false
const todoApp = (state = initState, action) =>{
    switch(action.type){
        case 'OPENMENU' :
            state = true
            return state
        case 'CLOSEMENU' :
            state = false
            return state
        default:
            return state
    }
}


export default todoApp;