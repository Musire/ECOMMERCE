import one from "../../assets/images/thumbnail images/thumbnail-1.jpg"
import two from "../../assets/images/thumbnail images/thumbnail-2.jpg"
import three from "../../assets/images/thumbnail images/thumbnail-3.jpg"
import four from "../../assets/images/thumbnail images/thumbnail-4.jpg"

const thumbnails = {
    0: one,
    1: two,
    2: three,
    3: four
}

const Thumbnail = ({thumbnail}) => {
    return ( 
        <img src={thumbnails[thumbnail]} alt="thumbnail-img" className="w-[20%] rounded-xl "/>
     );
}
 
export default Thumbnail;