'use strict';
import {Record} from 'immutable';

const objectRecord = new Record({
    valueCount: 0,
})

const initialState = new objectRecord();

const count = (state = initialState, action) => {
    switch(action.type){
        case 'SET_COUNT':
            return state.set('valueCount', action.args);

            default:
                return state;
    }
}

export default count;