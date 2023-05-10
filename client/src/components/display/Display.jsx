import { displayText as Text } from "../../constants/text"
import cart from "../../assets/images/white-cart.svg"
import plus from "../../assets/images/icon-plus.svg"
import minus from "../../assets/images/icon-minus.svg"
import useCounter from "../../hooks/useCounter"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import thumbnail from "../../assets/images/thumbnail images/thumbnail-1.jpg"

const Display = () => {
    const { counter, increase, decrease } = useCounter(999)
    const isZero = counter === 0

    const { addItem } = useContext(CartContext)

    const newItem = {
        id: "FLES1",
        icon: thumbnail,
        title: "Fall Limited Edition Sneakers",
        price: "125.00", 
        quantity: counter
     }

    return ( 
        <section className="pt-10 pb-20 bg-white section-container">
            <div className="block-container gap-y-8 centered-col">
                <article className="flex flex-col gap-y-6">
                    <h3 className="text-lg font-bold uppercase text-orange">{Text.subtitle}</h3>
                    <h2 className="text-4xl font-extrabold text-black/80">{Text.title}</h2>
                    <p className="text-lg text-smoke ">{Text.content}</p>
                </article>
                <div className="flex flex-col w-full block-container gap-y-8 ">
                    <article className="xs:spaced md:flex-col md:justify-start md:items-start md:gap-y-4">
                        <div className="spaced gap-x-4">
                            <h2 className="text-4xl font-extrabold text-black/80">{Text.price}</h2>
                            <h3 className="px-2 py-1 text-xl font-semibold rounded-lg bg-paleorange text-orange">{Text.discount}</h3>
                        </div>
                        <h3 className="text-xl font-semibold line-through text-darkgrayblue/50">{Text.previous}</h3>
                    </article>
                    <div className="xs:centered-col w-full xs:gap-y-4 md:flex-row md:gap-x-4">
                        <div className="xs:w-full md:w-2/5 xs:h-16 md:h-14 p-4 spaced bg-lightgrayblue rounded-xl">
                        <button className="disabled:cursor-not-allowed" onClick={decrease} disabled={isZero}>
                                <img src={minus} alt="" className="w-4" />
                            </button>
                            <h3 className="text-2xl font-semibold text-dark">{counter}</h3>
                            <button className="" onClick={increase}>
                                <img src={plus} alt="" className="w-4" />
                            </button>
                        </div>
                        <button className="xs:w-full md:w-3/5 gap-8 xs:py-6 md:py-3 text-white shadow-2xl centered bg-orange rounded-xl shadow-orange/50 disabled:cursor-not-allowed" onClick={() => addItem(newItem)} disabled={isZero}>
                            <img src={cart} alt="" className="" />
                            <p className="text-lg font-semibold">{Text.button}</p>
                        </button>
                    </div>
                    
                </div>
            </div>
        </section>
     );
}
 
export default Display;