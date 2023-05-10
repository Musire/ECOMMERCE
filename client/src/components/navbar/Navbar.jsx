import menu from "../../assets/images/icon-menu.svg"
import close from "../../assets/images/icon-close.svg"
import cart from "../../assets/images/icon-cart.svg"
import avatar from "../../assets/images/image-avatar.png"
import logo from "../../assets/images/logo.svg"
import { useState } from "react"

const Navbar = () => {
    const [open, setOpen] =  useState(false)
    const toggleMenu = () => {
        setOpen(!open)
    }

    const [cartOpen, setCartOpen] = useState(false)

    const toggleCart = () => {
        setCartOpen(!cartOpen)
    }
    
    return ( 
        <>
            <nav className="absolute top-0 left-0 z-20 w-full h-20 p-8 bg-white centered">
                <div className="block-container h-20 xs:w-[95%] lg:w-4/5 spaced md:border-b-2 md:border-silver/50 ">
                    <div className="spaced gap-x-4">
                        <button className="md:hidden" onClick={toggleMenu}>
                            {!open && <img src={menu} alt="" className="z-50 w-6 h-5" />}
                        </button>
                        <img src={logo} alt="logo" className="w-44" />
                        <ul className="ml-4 spaced xs:hidden md:flex md:gap-x-5 lg:gap-x-7">
                            <li className="navbar-link">collections</li>
                            <li className="navbar-link">men</li>
                            <li className="navbar-link">women</li>
                            <li className="navbar-link">about</li>
                            <li className="navbar-link">contact</li>    
                        </ul>
                    </div>
                    <div className="spaced gap-x-6">
                        <button className="" onClick={toggleCart}>
                            <img src={cart} alt="" className="w-7 h-7" />
                        </button>
                        <img src={avatar} alt="" className="xs:w-7 xs:h-7 md:w-10 md:h-10" />
                    </div>
                </div>
            </nav>
            {open && <aside className="fixed top-0 left-0 z-40 w-screen h-screen bg-black/75 centered " >
                <section className="absolute top-0 left-0 flex flex-col w-3/5 h-full px-[2.75rem] py-8 bg-white gap-y-14">
                    <img src={close} alt="" className="z-50 w-6 h-6" onClick={toggleMenu} />
                    <ul className="flex flex-col gap-6">
                        <li className="sidebar-link">collections</li>
                        <li className="sidebar-link">men</li>
                        <li className="sidebar-link">women</li>
                        <li className="sidebar-link">contact</li>
                    </ul>
                </section>
            </aside>}
            {cartOpen && <aside className="absolute z-40 bg-white top-24 left-4 w-[28.5rem] rounded-xl h-80 shadow-2xl">
                <div className="w-full p-8 text-xl font-extrabold border-b-2 h-1/4 border-silver/50 text-black/75">Cart</div>
                <div className="w-full text-xl font-extrabold h-3/4 centered text-dark/50">
                    Your cart is empty.
                </div>
            </aside>}
        </>
     );
}
 
export default Navbar;