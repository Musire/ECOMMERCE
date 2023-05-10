import { Cart, Sidebar } from "./"
import avatar from "../../assets/images/image-avatar.png"
import logo from "../../assets/images/logo.svg"

const Navbar = () => {
    return ( 
        <>
            <nav className="absolute top-0 left-0 z-20 w-full h-20 p-8 bg-white centered">
                <div className="block-container h-20 xs:w-full sm:w-[95%] lg:w-4/5 spaced md:border-b-2 md:border-silver/50 ">
                    <div className="spaced gap-x-4">
                        <Sidebar />
                        <img src={logo} alt="logo" className="w-44" />
                        <ul className="ml-4 spaced xs:hidden md:flex md:gap-x-5 lg:gap-x-7">
                            <li className="navbar-link">collections</li>
                            <li className="navbar-link">men</li>
                            <li className="navbar-link">women</li>
                            <li className="navbar-link">about</li>
                            <li className="navbar-link">contact</li>    
                        </ul>
                    </div>
                    <div id="icon-wrapper" className="spaced xs:gap-x-2 sm:gap-x-6">
                        <Cart />
                        <img src={avatar} alt="" className="xs:w-7 xs:h-7 md:w-10 md:h-10" />
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;