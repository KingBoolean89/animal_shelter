import{
    GET_DOGS, 
    DOGS_ERROR,
    SET_LOADING
} from '../actions/types';

const initialState = {
    dogs: [],
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type){
        case GET_DOGS:
            return{
                ...state,
                dogs: action.payload,
                loading: false
            };
        case SET_LOADING:
            return{
                ...state,
                loading: true
            };
        case DOGS_ERROR:
            return{
                ...state,
                error: action.payload
            };
        default:
            return state;    
    }

}