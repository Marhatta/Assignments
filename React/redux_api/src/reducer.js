
const initialState = {
    data:[]
}

const reducer = (state = initialState,action) => {
    if(action.type === 'FETCH_DATA'){
        return {...state,data:action.data}
    }
    return state;
}

export default reducer;