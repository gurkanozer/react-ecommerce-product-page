import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART} from './actionTypes';

const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
        //If count is lower than 1, just return current state.
        if(action.payload.count <= 0)
            return state;
        //there is no another item to add to cart. So i just pick to first item on the cart list.
            let item = state[0];
            if(!item?.count){
                item= {...item,count:0};
            }
            let count = item?.count + action.payload.count;
            return [{...action.payload, count}];
        case REMOVE_FROM_CART:
            //Again there is no another item in the cart. And i just clear all state.
            return [];
        case CLEAR_CART:
            //There is no need to this. Cuz i don't have another item to remove.
            return [];
        default:
            return state;
    }
}

export default cartReducer;