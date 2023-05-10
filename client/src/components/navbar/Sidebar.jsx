import { useState } from "react";
import menu from "../../assets/images/icon-menu.svg"
import close from "../../assets/images/icon-close.svg"

const Sidebar = () => {
    const [open, setOpen] =  useState(false)
    const toggleMenu = () => {
        setOpen(!open)
    }
    return ( 
        <>
            <button className="md:hidden" onClick={toggleMenu}>
                {!open && <img src={menu} alt="" className="z-50 w-6 h-5" />}
            </button>
            {open && <aside className=" fixed top-0 left-0 z-40 w-screen h-screen bg-black/75 centered " >
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
        </>
     );
}
 
export default Sidebar;