import { createContext, useContext, useState } from "react";
import cart from "../../assets/images/icon-cart.svg"
import { CartItem } from "./";
import { CartContext } from "../../context/CartContext"

const Cart = () => {
    const { state } = useContext(CartContext)
    const isEmpty = state.length === 0
    const [cartOpen, setCartOpen] = useState(false)

    const toggleCart = () => {
        setCartOpen(!cartOpen)
    }

    const cartItems = state.map((item, index) => 
    <CartItem 
        key={index} 
        id={item.id} 
        icon={item.icon} 
        title={item.title} 
        price={item.price} 
        quantity={item.quantity} 
    />)

    return ( 
        <>
            <button className="relative" onClick={toggleCart}>
                <img src={cart} alt="" className="w-7 h-7" />
                {!isEmpty && <div className="absolute w-8 px-2 font-bold text-white rounded-full -right-3 -top-3 bg-orange">{state[0].quantity}</div>}
            </button>
            {cartOpen && <aside className="absolute z-30 bg-white top-24 right-20 w-[28.5rem] rounded-xl h-80 shadow-2xl">
                    <div className="w-full p-8 text-xl font-extrabold border-b-2 h-1/4 border-silver/50 text-black/75">Cart</div>
                    <div className="w-full p-4 text-xl font-extrabold h-3/4 centered-col gap-y-4 text-dark/50">
                        {isEmpty && <p>Your cart is empty.</p>}
                        {!isEmpty && cartItems}
                    </div>
                </aside>}
        </>
     );
}
 
export default Cart;