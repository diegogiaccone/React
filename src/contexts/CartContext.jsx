import { createContext, useState } from "react";


export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const calcularTotalCompra = () => {
        let total = 0;
        cart.forEach((e) => total += (e.cantidad * e.precio))
        return total;
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    }

    const removeAll = () => {
        setCart([]);
    }

    const removeForm = () => {
        setCart([]);
    }


    return (
        <CartContext.Provider value={{ cart, setCart, calcularTotalCompra, removeItem, removeAll, removeForm }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
