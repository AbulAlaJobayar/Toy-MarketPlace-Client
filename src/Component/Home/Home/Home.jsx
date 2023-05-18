import React from 'react';

const Home = () => {
    return (
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
    );
};

export default Home;