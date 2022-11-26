import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import cookies from "browser-cookies";

import { API } from "../utils/API";

export const useGetCart = () => {
    const location = useLocation();
    const [cart, setCart] = useState({ products: [] });

    useEffect(() => {
        const cartId = cookies.get("cart-id");
        if (cartId)
            API
                .get(`sales/${cartId}`)
                .then(res => res.json())
                .then(setCart);
    }, [location]);
    return [cart];
}

export default useGetCart;
