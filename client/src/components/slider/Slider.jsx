import prev from "../../assets/images/button-prev.svg"
import next from "../../assets/images/button-next.svg"
import { Slide, Thumbnail } from "./"
import useCounter from "../../hooks/useCounter"

const Slider = ({max}) => {
    const { counter, increase, decrease } = useCounter(3)
    const isZero = counter === 0
    const isMax = counter === max - 1

    return ( 
        <section className="relative section-container min-h-[54vh] xs:h-128  md:h-[30rem] centered-col flex-col gap-y-8 xs:mt-24 md:mt-0">
            <div id="slide-container" className="relative overflow-hidden bg-white block-container xs:w-full xs:h-full md:w-full md:rounded-xl">
                <Slide slide={0} current={counter}/>
                <Slide slide={1} current={counter}/>
                <Slide slide={2} current={counter}/>
                <Slide slide={3} current={counter}/>
            </div>
            <div id="thumbnail-container" className="xs:hidden md:flex spaced md:gap-x-3 lg:gap-x-6 h-auto w-full">
                <Thumbnail thumbnail={0}/>
                <Thumbnail thumbnail={1}/>
                <Thumbnail thumbnail={2}/>
                <Thumbnail thumbnail={3}/>
            </div>
            <button className="controller-btn left-4 disabled:cursor-not-allowed md:hidden" disabled={isZero} onClick={decrease}>
                <img src={prev} alt="" className="w-4 h-4" />
            </button>
            <button className="controller-btn right-4 disabled:cursor-not-allowed md:hidden" disabled={isMax} onClick={increase}>
                <img src={next} alt="" className="w-4 h-4" />
            </button>
        </section>
     );
}
 
export default Slider;