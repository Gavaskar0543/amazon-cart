import { ADD_PRODUCTS, REMOVECART } from "../Action";
import { ADD_TO_CART } from "../Action";
import { ADDNEWONE ,cartCount} from "../Action";
const initalState = {
    cartCount:0,
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
        case REMOVECART:
            const filteredArray = state.cartList.filter(product => product.id !== action.item.id);
            return{
                ...state,
                cartList:filteredArray
            }
        case cartCount:
            return{
                ...state,
                cartCount:action.val
            }
        default:
            return state
    }
}