import{
    GET_DOGS, 
    DOGS_ERROR,
    SET_LOADING
} from './types';


export const getDogs = () => async dispatch => {
    try{
        set_loading();
        const res = await fetch('http://localhost:8000/api/dogs');
        const data = await res.json();

        dispatch({
            type: GET_DOGS,
            payload: data
        });
    }catch (err){
            dispatch({
                type: DOGS_ERROR,
                payload: err.response
            });
        }

    }

    export const setLoading = () =>{
        return{
            type:SET_LOADING
        }
    }
