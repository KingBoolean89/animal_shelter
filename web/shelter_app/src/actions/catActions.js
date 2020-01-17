import{
    GET_CATS, 
    CATS_ERROR,
    SET_LOADING
} from './types';


export const getCats = () => async dispatch => {
    try{
        set_loading();
        const res = await fetch('http://localhost:8000/api/cats');
        const data = await res.json();

        dispatch({
            type: GET_CATS,
            payload: data
        });
    }catch (err){
            dispatch({
                type: CATS_ERROR,
                payload: err.response
            });
        }

    }

    export const setLoading = () =>{
        return{
            type:SET_LOADING
        }
    }
