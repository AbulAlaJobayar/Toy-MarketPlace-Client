import React from 'react';
import Carousel from 'better-react-carousel'

const Gallery = () => {
    return (
        <>
        <Carousel cols={4} rows={1} gap={10} loop>
        <Carousel.Item>
          <img width="100%" className='rounded-xl h-72' src="https://i.ibb.co/R3GLMfp/avenger-hulk-hero-ga02e01243-640.jpg?random=1" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" className='rounded-xl h-72' src="https://i.ibb.co/2Zw7BzB/captain-america-gca28a8afb-640.jpg?random=2" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" className='rounded-xl h-72' src="https://i.ibb.co/B3XsChN/groot-super-hero-ga893c1c3c-640.jpg?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" className='rounded-xl h-72' src="https://i.ibb.co/ZWMNywY/iron-man-g4064eec98-640.jpg?random=4" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" className='rounded-xl h-72' src="https://i.ibb.co/25TPK0s/marvel-g83ac97056-640.jpg?random=5" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" className='rounded-xl h-72' src="https://i.ibb.co/3cwn1cB/minion-hulk-gaa758b7af-640.jpg?random=6" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" className='rounded-xl h-72' src="https://i.ibb.co/NtJkRb6/spiderman-g9a29e2456-640.jpg?random=7" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" className='rounded-xl h-72' src="https://i.ibb.co/vhp2vt8/toy-g42b7c94ae-640.jpg?random=8" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" className='rounded-xl h-72' src="https://i.ibb.co/5BhLdKZ/toy-gb13fbee28-640.jpg?random=9" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" className='rounded-xl h-72' src="https://i.ibb.co/47wHbHY/wonder-woman-g60b883cfb-640.jpg?random=10" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" className='rounded-xl h-72' src="https://i.ibb.co/1bHQ0q7/young-g8e340de0c-640.jpg?random=11" />
        </Carousel.Item>
    
      </Carousel> 
        </>
    );
};

export default Gallery;