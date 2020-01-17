import{
    GET_REPTILES, 
    REPTILES_ERROR,
    SET_LOADING
} from './types';


export const getReptiles = () => async dispatch => {
    try{
        set_loading();
        const res = await fetch('http://localhost:8000/api/reptiles');
        const data = await res.json();

        dispatch({
            type: GET_REPTILES,
            payload: data
        });
    }catch (err){
            dispatch({
                type: REPTILES_ERROR,
                payload: err.response
            });
        }

    }

    export const setLoading = () =>{
        return{
            type:SET_LOADING
        }
    }
