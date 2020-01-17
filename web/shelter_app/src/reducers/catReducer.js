import{
    GET_CATS, 
    CATS_ERROR,
    SET_LOADING
} from '../actions/types';

const initialState = {
    cats: [],
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type){
        case GET_CATS:
            return{
                ...state,
                cats: action.payload,
                loading: false
            };
        case SET_LOADING:
            return{
                ...state,
                loading: true
            };
        case CATS_ERROR:
            return{
                ...state,
                error: action.payload
            };
        default:
            return state;    
    }

}