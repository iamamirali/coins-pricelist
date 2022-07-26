const socketReducer = (state = {}, action: any) => {
    if(action.type == 'websocket') {
        return {...state, data: action.payload}
    } else {
        return state
    }
}

export default socketReducer