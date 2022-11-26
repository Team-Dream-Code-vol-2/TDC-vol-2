import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

import { API } from "../utils/API";

export const useGetProducts = () => {
    const location = useLocation();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        API
            .get('products')
            .then(res => res.json())
            .then(setProducts);
    }, [location]);
    return [products];
}

export default useGetProducts;
