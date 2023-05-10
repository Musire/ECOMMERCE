import { useState } from "react";
import cart from "../../assets/images/icon-cart.svg"
import thumbnail from "../../assets/images/thumbnail images/thumbnail-1.jpg"
import { CartItem } from "./";

const Cart = () => {
    const [cartOpen, setCartOpen] = useState(false)

    const toggleCart = () => {
        setCartOpen(!cartOpen)
    }
    return ( 
        <>
            <button className="" onClick={toggleCart}>
                <img src={cart} alt="" className="w-7 h-7" />
            </button>
            {cartOpen && <aside className="absolute z-40 bg-white top-24 left-4 w-[28.5rem] rounded-xl h-80 shadow-2xl">
                <div className="w-full p-8 text-xl font-extrabold border-b-2 h-1/4 border-silver/50 text-black/75">Cart</div>
                <div className="w-full text-xl font-extrabold h-3/4 centered text-dark/50 p-4">
                    <CartItem 
                        icon={thumbnail} 
                        title="Fall Limited Edition Sneakers" 
                        price="125.00" 
                        quantity={3}
                     />
                </div>
            </aside>}
        </>
     );
}
 
export default Cart;