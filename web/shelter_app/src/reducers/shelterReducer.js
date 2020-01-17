import{
    GET_SHELTERS, 
    SHELTERS_ERROR,
    SET_LOADING,
    SEARCH_SHELTERS
} from '../actions/types';

const initialState = {
    shelters: [],
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type){
        case GET_SHELTERS:
            return{
                ...state,
                shelters: action.payload,
                loading: false
            };
            case SEARCH_SHELTERS:
            return{
                ...state,
                shelters: action.payload,
                loading: false
            };
        case SET_LOADING:
            return{
                ...state,
                loading: true
            };
        case SHELTERS_ERROR:
            return{
                ...state,
                error: action.payload
            };
        default:
            return state;    
    }

}