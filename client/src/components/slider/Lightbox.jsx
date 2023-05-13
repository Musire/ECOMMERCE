import { ReactComponent as Prev } from "../../assets/images/button-prev.svg"
import { ReactComponent as Next } from "../../assets/images/button-next.svg"
import { ReactComponent as CloseButton } from "../../assets/images/white-close.svg"
import { useContext } from "react";
import { ThumbContext } from "../../context/ThumbContext";
import { Slide, ThumbHolder, Thumbnail } from "./"

const Lightbox = ({ max, action }) => {
    const { selected, increase, decrease } = useContext(ThumbContext)
    const isZero = selected === 0
    const isMax = selected === max - 1
    
    return ( 
        <section className="xs:hidden md:flex fixed top-0 left-0 z-40 w-screen h-screen bg-black/75 centered">
            <div className="relative w-2/5 h-[65%] centered-col gap-y-4">
                <button className="place-self-end centered" onClick={action}>
                    <CloseButton viewBox="0 0 15 15" style={{ width: '1.5rem', height: '1.5rem' }} className="text-white fill-current hover:text-orange easy-transition" />
                </button>
                <div id="slide-container" className="slide-container" >
                    <Slide slide={0} current={selected}/>
                    <Slide slide={1} current={selected}/>
                    <Slide slide={2} current={selected}/>
                    <Slide slide={3} current={selected}/>
                </div>
                <ThumbHolder >
                    <Thumbnail thumbnail={0}/>
                    <Thumbnail thumbnail={1}/>
                    <Thumbnail thumbnail={2}/>
                    <Thumbnail thumbnail={3}/>
                </ThumbHolder>
                <button className="controller-btn xs:hidden md:flex -left-5 text-darkgrayblue easy-transition hover:cursor-pointer hover:text-orange" disabled={isZero} onClick={decrease}>
                    <Prev className="stroke-current " />
                </button>
                <button className="-right-5 controller-btn xs:hidden md:flex text-darkgrayblue easy-transition hover:cursor-pointer hover:text-orange" disabled={isMax} onClick={increase}>
                    <Next className="stroke-current "/>
                </button>
            </div>          
        </section>
     );
}
 
export default Lightbox;