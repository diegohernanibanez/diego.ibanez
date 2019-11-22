import { GET_ITEMS } from "../actions/action";

const initialState = { mostrar: false }
export default (state = initialState, action) => {
    switch (action.type){
        case GET_ITEMS: 
            return {
                ...state,
                mostrar: true
            }
        default:
            return state;
    }
}

export const selectActiveMostrar = state => state.reducer.mostrar;