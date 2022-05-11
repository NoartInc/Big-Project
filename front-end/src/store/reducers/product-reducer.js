const initialState = {
    productList: [],
    product: null,
    carts: []
};

const productReducer = (state = initialState, action) => {
    switch (action.type){
        case "getProduct":
            return {
                ...state,
                productList: action.payload,
            };
        case "setProduct":
            // mendapatkan data by id (action.payload)
            const findProduct = state.productList.find(product => String(product.id) === String(action.payload));
            return {
                ...state,
                product: findProduct
            }
        case "addToCart":
            let cartList = [...state.carts]
            const findCartProduct = cartList.find(cart => cart.id === state.product.id);

            if (findCartProduct) {
                cartList = cartList.map(cart => {
                    if (cart.id === findCartProduct.id) {
                        return {
                            ...findCartProduct,
                            qty: cart.qty + 1
                        }
                    }
                    return cart;
                });
            } else {
                cartList.push({
                    ...state.product,
                    qty:1
                })
            }

            return {
                ...state,
                carts: cartList
            }
            case "getProductById":
            return {
                ...state,
                product: action.payload,
            };
        default:
      return state;
    }
}

export default productReducer;