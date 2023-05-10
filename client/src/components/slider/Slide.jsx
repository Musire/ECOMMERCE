import one from "../../assets/images/product images/product-1.jpg"
import two from "../../assets/images/product images/product-2.jpg"
import three from "../../assets/images/product images/product-3.jpg"
import four from "../../assets/images/product images/product-4.jpg"

const images = {
    0: one,
    1: two,
    2: three,
    3: four
}

const Slide = ({slide, current}) => {
    const visible = current === slide
    return ( 
        <img src={images[slide]} alt="product-1" className={`slider-img slow-transition bg-center ${visible ? 'opacity-100' : 'opacity-0'}`} />
     );
}
 
export default Slide;