import { useContext } from "react"
import one from "../../assets/images/thumbnail images/thumbnail-1.jpg"
import two from "../../assets/images/thumbnail images/thumbnail-2.jpg"
import three from "../../assets/images/thumbnail images/thumbnail-3.jpg"
import four from "../../assets/images/thumbnail images/thumbnail-4.jpg"
import { ThumbContext } from "../../context/ThumbContext"

const thumbnails = {
    0: one,
    1: two,
    2: three,
    3: four
}

const Thumbnail = ({ thumbnail }) => {
    const { selected, changeSelected } = useContext(ThumbContext)
    const isActive = selected === thumbnail

    return (
        <button className={`w-[20%] md:h-[4.5rem] lg:h-20 rounded-xl relative ${isActive ? 'ring-2 ring-orange' : ''}`} onClick={() => changeSelected(thumbnail)}>
            <div className="w-full h-full bg-white centered rounded-xl">
                <img src={thumbnails[thumbnail]} alt="thumbnail-img" className={`bg-white w-full h-full rounded-xl hover:cursor-pointer hover:opacity-[50%] hover:brightness-125 easy-transition z-20 ${isActive ? ' opacity-40 brightness-125' : ''}`} />
            </div>
        </button>
     );
}
 
export default Thumbnail;