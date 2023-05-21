
import Approch from '../ApprochSection/Approch';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {

    return (
        <div>
            <div className="hero h-[630px]  " style={{ backgroundImage: `url("https://i.ibb.co/f0fGhpz/playdough-art-with-crab-underwater.jpg")` }} >
                <div className="hero-content flex-col md:flex-row-reverse justify-between gap-5 w-full">
                    <img src="https://i.ibb.co/RvHv92m/33482-removebg-preview-removebg-preview.png" className="max-w-sm rounded-lg hidden md:block " />
                    <div className='text-center md:text-left'>
                        <h1 className="text-5xl font-bold text-white">Pick the best toy <br /> for your kid!</h1>
                        <p className="py-6 text-base text-white">We offer a premium service, whether you are shopping <br /> at one of our flagship stores or via our website!</p>
                        <button className="btn btn-primary font-bold">Discover Now</button>
                    </div>
                </div>
            </div>
            <div className='bg-base-200' >

                <div className='text-center mt-28 mb-16'>
                    <p className='text-4xl font-bold  text-second-Color mb-5 border-b-4 rounded border-[#181D4E] w-40 mx-auto pt-10'>Gallery</p>

                    <h1 className='text-xl  text-second-color'>As you step inside, you are greeted by a vibrant display of colorful toys arranged in playful exhibits. <br /> From action figures and dolls to board games and puzzles, the gallery offers a diverse
                        <br /> selection to suit every interest and passion.</h1>
                </div>

                <Gallery></Gallery>
            </div>
            <div className='text-center mt-28 mb-16'>
                <h1 className='text-5xl mb-10 text-second-color font-bold'>Shop By Category</h1>


                <div>
                    <ShopByCategory></ShopByCategory>

                </div>
            </div>
            <div >
                <Testimonial></Testimonial>
            </div>
            <div>
                <Approch></Approch>
            </div>


        </div>
    );
};

export default Home;