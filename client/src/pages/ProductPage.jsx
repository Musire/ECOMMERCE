import { ThumbProvider } from '../context/ThumbContext';
import { Navbar, Display, Slider} from './'

const ProductPage = () => {
    return ( 
        <section id='app-container' className='app-container'>
            <Navbar />
            <div className="content-container">
                <ThumbProvider>
                    <Slider max={4}/>
                </ThumbProvider>
                <Display />
            </div>
        </section>
     );
}
 
export default ProductPage;