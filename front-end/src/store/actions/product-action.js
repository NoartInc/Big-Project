import { getRequest } from "../../utils/api"

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