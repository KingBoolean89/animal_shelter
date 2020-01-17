

import{
    GET_SHELTERS, 
    SHELTERS_ERROR,
    SEARCH_SHELTERS,
    SET_LOADING
} from './types';


export const getShelters = () => async dispatch => {
    try{
        set_loading();
        const res = await fetch('http://localhost:8000/api/v1/shelters');
        const data = await res.json();

        dispatch({
            type: GET_SHELTERS,
            payload: data
        });
    }catch (err){
            dispatch({
                type: SHELTERS_ERROR,
                payload: err.response
            });
        }

    }

    export const setLoading = () =>{
        return{
            type:SET_LOADING
        }
    }

    export const searchShelters = text => async dispatch => {
        try {
          setLoading();
      
          const res = await fetch(`http://localhost:8000/api/v1/shelters/${text}`);
          const data = await res.json();
      
          dispatch({
            type: SEARCH_SHELTERS,
            payload: data
          });
        } catch (err) {
          dispatch({
            type: SHELTERS_ERROR,
            payload: err.response
          });
        }
      };
