import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchOne, selectedProduct } from "../features/product";

export const useGetProduct= (productId) => {
    const product = useSelector(selectedProduct)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchOne(productId))
    }, [productId, dispatch]);
    return [product];
}

export default useGetProduct;
