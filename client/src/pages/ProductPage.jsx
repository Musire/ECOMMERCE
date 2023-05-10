import { Navbar, Display, Slider} from './'

const ProductPage = () => {
    return ( 
        <section id='app-container' className='relative w-screen h-auto min-h-screen bg-white centered'>
            <Navbar />
            <div className="xs:centered-col md:flex-row md:mt-24 block-container lg:w-[70%] md:py-14">
                <Slider max={4}/>
                <Display />
            </div>
        </section>
     );
}
 
export default ProductPage;