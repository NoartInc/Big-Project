import { getRequest, postRequest } from "../../utils/api"

const url = "/product";

export const getProduct = () => {
    return (dispatch) => {
        getRequest(url)
            .then(result => {
                dispatch({
                    type: "getProduct",
                    payload: result
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const setProduct = (id) => {
    return {
        type: 'setProduct',
        payload: id
    }
}

export const addToCart = () => {
    console.log("panggil1")
    return {
        type: 'addToCart',
    }
}

export const addProduct = (data) => {
    return (dispatch) => {
        postRequest('/product', data)
        .then(res => {
            dispatch({
                type: 'ADD_PRODUCT',
                payload: res.data
            })
        })
        .catch((err) => {
            console.error(err)
        })
    }
}


export const getProductById = (id) => {
    return (dispatch) => {
        getRequest(`${url}/${id}`)
            .then(result => {
                dispatch({
                    type: "getProductById",
                    payload: result
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const removeCart = (id) => {
    return (dispatch) => {
        dispatch({ 
            type: "removeCart",
            payload: id
        });
    }
}

export const updateCart = (data) => {
    return (dispatch) => {
        dispatch({ 
            type: "setCart", 
            payload: data
        });
    }
}

export const doOrder = (shipmentData) => {
    return (dispatch, getState) => {
        const { carts } = getState().productReducer;
        postRequest("/order", {
            carts, 
            shipment: shipmentData
        }).then(res => {
            // res ini data hasil order
            if (res?.id) {
                dispatch({ type: "clearCart" });
                window.open("/payment", "_self");
            } else {
                alert("Gagal memproses order");
            }
        }).catch(err => {
            console.log(err);
        })
    }
}