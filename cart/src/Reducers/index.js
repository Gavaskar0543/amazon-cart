
export default function products(state=[],action){
    if(action.type === 'ADD_PRODUCT'){
        return action.product;
    }
    return state;
}