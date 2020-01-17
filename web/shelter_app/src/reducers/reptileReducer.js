import{
    GET_REPTILES, 
    REPTILES_ERROR,
    SET_LOADING
} from '../actions/types';

const initialState = {
    reptiles: [],
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type){
        case GET_REPTILES:
            return{
                ...state,
                reptiles: action.payload,
                loading: false
            };
        case SET_LOADING:
            return{
                ...state,
                loading: true
            };
        case REPTILES_ERROR:
            return{
                ...state,
                error: action.payload
            };
        default:
            return state;    
    }

}