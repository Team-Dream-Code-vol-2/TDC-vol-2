import { createSlice } from '@reduxjs/toolkit';
import cookies from "browser-cookies";

import { API } from '../utils/API'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        loading: 'idle',
        cart: {},
        error: null,
    },
    reducers: {
        cartLoading(state, action) {
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        cartReceived(state, action) {
            if (state.loading === 'pending') {
                state.cart = action.payload
                state.loading = 'idle'
            }
        },
    }
})

export const { cartLoading, cartReceived } = cartSlice.actions
export default cartSlice.reducer

export const lastCart = (state) => state.cart.cart

export const addProductToCart = (product, units) => async (dispatch) => {
    const cartId = cookies.get("cart-id");
    const body = { product: product._id, units }
    if (cartId) body.cart = cartId
    dispatch(cartLoading())
    const endpoint = `sales/add-product`;
    const response = await API
        .post(endpoint, body)
        .then(res => res.json())
    cookies.set("cart-id", response._id);
    dispatch(cartReceived(response))
}

export const fetchLastCart = () => async (dispatch) => {
    const cartId = cookies.get("cart-id");
    if (cartId) {
        dispatch(cartLoading())
        const response = await API
            .get(`sales/${cartId}`, {})
            .then(res => res.json())
        dispatch(cartReceived(response))
    }
}

export const buy = () => async (dispatch) => {
    const cartId = cookies.get("cart-id");
    if (cartId) {
        dispatch(cartLoading())
        await API
            .put(`sales/${cartId}/buy`, {})
            .then(res => res.json())
        cookies.set("cart-id", "");
        dispatch(cartReceived({}))
    }
}

export const resetCart = () => async (dispatch) => {
    cookies.set("cart-id", "");
    dispatch(cartLoading())
    dispatch(cartReceived({}))
}