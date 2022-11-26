import { createSlice } from '@reduxjs/toolkit'

import { API } from '../utils/API'

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        loading: 'idle',
        products: [],
        product: {},
        error: null,
    },
    reducers: {
        productsLoading(state, action) {
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        productsReceived(state, action) {
            if (state.loading === 'pending') {
                state.products = action.payload
                state.loading = 'idle'
            }
        },
        productReceived(state, action) {
            if (state.loading === 'pending') {
                state.product = action.payload
                state.loading = 'idle'
            }
        },
    }
})

export const { productsLoading, productsReceived, productReceived } = productsSlice.actions
export default productsSlice.reducer

export const allProducts = (state) => state.product.products
export const selectedProduct = (state) => state.product.product

export const fetchAll = () => async (dispatch) => {
    dispatch(productsLoading())
    const response = await API
        .get('products')
        .then(res => res.json())
    dispatch(productsReceived(response))
}

export const fetchOne = (productId) => async (dispatch) => {
    dispatch(productsLoading())
    const response = await API
        .get(`products/${productId}`)
        .then(res => res.json())
    dispatch(productReceived(response))
}

export const saveProduct = (product) => async (dispatch) => {
    dispatch(productsLoading())
    const endpoint = 'products';
    const response = await API
        .post(endpoint, product)
        .then(res => res.json())
    dispatch(productReceived(response))
}

export const editProduct = (productId, product) => async (dispatch) => {
    dispatch(productsLoading())
    const endpoint = `products/${productId}`;
    const response = await API
        .put(endpoint, product)
        .then(res => res.json())
    dispatch(productReceived(response))
}

export const removeProduct = (product) => async (dispatch) => {
    dispatch(productsLoading())
    const endpoint = `products/${product._id}`;
    const response = await API
        .delete(endpoint, {})
        .then(res => res.json())
    dispatch(productReceived(response))
}