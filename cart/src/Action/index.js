//action type
export const ADD_PRODUCTS = 'ADD-PRODUCT';
export const ADD_TO_CART = 'CART';
export const ADDNEWONE = 'NEWPRODUCT';
export const REMOVECART = 'REMOVEPRODUCT';
export const cartCount = 'CARTCOUNT';
//action creaters
export function addProducts(product){
    return{
        type:ADD_PRODUCTS,
        product
    }
}
//ADDING TO THE CART
export function add2Cart(item){
    return{
        type:ADD_TO_CART,
        item
    }
}
//ADD NEW ITEM TO THE CART AS USERADDED CATEGROY
export function addnewPoduct(item){
    return{
        type:ADDNEWONE,
        item
    }
}
//REMOVE FROM CART ITEM
export function removeFromCart(item){
    return{
        type:REMOVECART,
        item
    }
}
//CART COUNT 
export function showCartCount(val){
    return{
        type:cartCount,
        val
    }
}