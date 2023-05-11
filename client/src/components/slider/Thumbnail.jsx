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
        <button className={`w-[20%] rounded-xl ${isActive ? 'ring-2 ring-orange' : ''}`} onClick={() => changeSelected(thumbnail)}>
            <img src={thumbnails[thumbnail]} alt="thumbnail-img" className={`w-full rounded-xl hover:opacity-[50%] easy-transition ${isActive ? ' opacity-50' : ''}`} />
        </button>
     );
}
 
export default Thumbnail;