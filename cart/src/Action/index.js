//action type
export const ADD_PRODUCTS = 'ADD-PRODUCT';
export const ADD_TO_CART = 'CART';
export const ADDNEWONE = 'NEWPRODUCT';
//action creaters
export function addProducts(product){
    return{
        type:ADD_PRODUCTS,
        product
    }
}
export function add2Cart(item){
    return{
        type:ADD_TO_CART,
        item
    }
}
export function addnewPoduct(item){
    return{
        type:ADDNEWONE,
        item
    }
}
