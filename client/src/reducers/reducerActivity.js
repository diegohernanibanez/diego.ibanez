const initialState = { mostrar: false }

export default (state = initialState, action) => {
    switch (action.type){
        case 'GET_ACTIVITIES': 
            return {
                ...state,
                mostrar: true
            }
        default:
            return state;
    }
}