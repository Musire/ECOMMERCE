import prev from "../../assets/images/button-prev.svg"
import next from "../../assets/images/button-next.svg"
import { Slide, Thumbnail, ThumbHolder, Lightbox } from "./"
import { ThumbContext } from "../../context/ThumbContext"
import { useContext, useState } from "react"

const Slider = ({max}) => {
    const { selected, increase, decrease } = useContext(ThumbContext)
    const isZero = selected === 0
    const isMax = selected === max - 1
    const [lightbox, setLightbox] = useState(false)

    const toggleLightbox = () => {
        setLightbox(!lightbox)
    }

    return ( 
        <>
            <section className="slider-section">
                <div id="slide-container" className="slide-container" onClick={toggleLightbox}>
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
                <button className="controller-btn left-4 " disabled={isZero} onClick={decrease}>
                    <img src={prev} alt="" className="w-4 h-4" />
                </button>
                <button className="controller-btn right-4 " disabled={isMax} onClick={increase}>
                    <img src={next} alt="" className="w-4 h-4" />
                </button>
            </section>
            {lightbox && <Lightbox max={max} action={toggleLightbox}/>}
        </>
        
     );
}
 
export default Slider;