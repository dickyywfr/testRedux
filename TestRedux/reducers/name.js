'use strict';
import {Record} from 'immutable';

const objectRecord = new Record({
    name: 'default',
})

const initialState = new objectRecord();

function name(state = initialState, action) {
    switch(action.type){
        case 'SET_NAME':
            return state.set('name', action.args);

            default:
                return state;
    }
}

export default name 