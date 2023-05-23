import React from 'react';


const Testimonial = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-[#181D4E]  mt-40 gap-10 py-6'>
            <div className='py-20 px-10 mx-auto ml-5 mr-5'>
                <p className='text-lg font-bold text-white mt-10 
                '>TESTIMONIALS</p>
                <h1 className='text-3xl  font-bold text-white mt-10'>
                    What Our Clients Say About Us
                </h1>
                <p className='texl-base text-white mt-5'>We appreciate your kind and honest feedback and invite you to our amazing store.</p>
                <button className='btn btn-primary rounded-xl mt-10' data-aos="fade-right"
                        data-aos-duration="2000">About us</button>
            </div>

            {/* card1 */}
            <div className='mr-7'>
                <div className="card w-full bg-base-100 mx-5  py-20">
                    
                    <div className="card-body ">
                        <h2 className="card-title mb-5">What a great store for the entire <br /> family! My kids love this place <br /> because of the toys!</h2>
                        <div className='flex items-center gap-4'>
                           <div>
                           <img src="https://i.ibb.co/XCxDGQx/face-g8a8ddad52-640.jpg" className='w-20 h-20 rounded-full' alt="" />
                           </div>
                            <div>
                                <h1 className='text-2xl font-bold text-[#181D4E]'>Mandy Mathers</h1>
                                <p className='text-lg  text-[#373e7e]'>CEO, Business Co</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* card-2 */}
            <div className=' mr-7'>
                <div className="card w-full bg-base-100 mx-5 mr-5 py-20">
                    <div className="card-body">
                        <h2 className="card-title mb-5 ">Not only do the toys make our <br /> children squeal with joy, but the <br /> sales team is awesome!</h2>
                        <div className='flex items-center gap-4'>
                           <div>
                           <img src="https://i.ibb.co/MB5zmtf/rc-cf-FMh5o5m5-N9-E-unsplash.jpg" className='w-20 h-20 rounded-full' alt="" />
                           </div>
                            <div>
                                <h1 className='text-2xl font-bold text-[#181D4E]'>Peter Bowman</h1>
                                <p className='text-lg  text-[#373e7e]'>CEO, Business Co</p>
                            </div>

                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;