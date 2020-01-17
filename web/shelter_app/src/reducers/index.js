import { combineReducers } from 'redux';
import dogReducer from './dogReducer';
import reptileReducer from './reptileReducer';
import shelterReducer from './shelterReducer';
import catReducer from './catReducer';

export default combineReducers({

    dog: dogReducer,
    reptile: reptileReducer,
    cat: catReducer,
    shelter: shelterReducer

});