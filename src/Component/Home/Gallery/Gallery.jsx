import React from 'react';


const Gallery = () => {
  return (
    <>
      <div className='bg-base-200 w-full'>
        <div className="carousel w-1/2 mx-auto pt-10">
          <div id="item1" className="carousel-item w-full">
            <img src="https://i.ibb.co/R3GLMfp/avenger-hulk-hero-ga02e01243-640.jpg" className="w-full " />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src="https://i.ibb.co/2Zw7BzB/captain-america-gca28a8afb-640.jpg" className="w-full" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src="https://i.ibb.co/B3XsChN/groot-super-hero-ga893c1c3c-640.jpg" className="w-full" />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img src="https://i.ibb.co/ZWMNywY/iron-man-g4064eec98-640.jpg" className="w-full" />
          </div>


          <div id="item5" className="carousel-item w-full">
            <img src="https://i.ibb.co/25TPK0s/marvel-g83ac97056-640.jpg" className="w-full" />
          </div>
          <div id="item6" className="carousel-item w-full">
            <img src="https://i.ibb.co/3cwn1cB/minion-hulk-gaa758b7af-640.jpg" className="w-full" />
          </div>
          <div id="item7" className="carousel-item w-full">
            <img src="https://i.ibb.co/NtJkRb6/spiderman-g9a29e2456-640.jpg" className="w-full" />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
          <a href="#item4" className="btn btn-xs">4</a>
          <a href="#item5" className="btn btn-xs">5</a>
          <a href="#item6" className="btn btn-xs">6</a>
          <a href="#item7" className="btn btn-xs">7</a>
    
        </div>
      </div>
    </>
  );
};

export default Gallery;