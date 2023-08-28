import { ADD_PRODUCTS } from "../Action";
import { ADD_TO_CART } from "../Action";
import { ADDNEWONE } from "../Action";
const initalState = {
    list :[],
    cartList :[],
    userAdded:[]
}
export default function products(state=initalState,action){
    
    switch(action.type){
        case ADD_PRODUCTS:
            return {
                ...state,
                list: action.product
            }
        case ADD_TO_CART:
            return {
                ...state,
                cartList: [action.item,...state.cartList]
            }
        case ADDNEWONE:
            return{
                ...state,
                userAdded:[action.item,...state.userAdded]
            }
        default:
            return state
    }
}