import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import ElementoProducto from '../../components/productos/ElementoProducto';
import Button from '../../components/Button';
import { buy, fetchLastCart, lastCart, resetCart } from '../../features/cart';

import './style.css';

export function CarritoCompras() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(lastCart);

    useEffect(() => {
        dispatch(fetchLastCart())
    }, [dispatch]);

    const onCancel = () => {
        dispatch(resetCart())
    }

    const onBuy = () => {
        dispatch(buy())
            .then(navigate('/productos'));
    }

    return (
        <div>
            <h1>Carrito de compras</h1>
            {cart._id &&
                <>
                    <div className="carrito">
                        <div className="lista-productos-carrito">
                            <div className="encabezado">
                                <p></p>
                                <p>Producto</p>
                                <p>Cantidad</p>
                                <p>Precio</p>
                                <p>Total</p>
                            </div>
                            {cart.products.map(product =>
                                <ElementoProducto
                                    key={product._id}
                                    {...product} />
                            )}
                        </div>

                        <div className="footer-productos-carrito">
                            <p className="label">Total:</p>
                            <p>{cart.total} COP</p>
                        </div>

                    </div>
                    <div className="botones-carrito">
                        <Button tipo="btn-primario" onClick={onBuy}>Finalizar Compra</Button>
                        <Button tipo="btn-cancelar" onClick={onCancel}>Cancelar</Button>
                    </div>
                </>
            }
        </div>
    )
}

export default CarritoCompras
