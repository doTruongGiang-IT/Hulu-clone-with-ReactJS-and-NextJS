import React from 'react';
import RecommendItem from './RecommendItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Recommend({recommends}) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 640 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
    };

    return (
        <div className="ml-20 mr-20 mt-10 mb-10">
            <h2 className="text-white text-xl">Recommendations</h2>
            <div className="mt-10 mb-10">
                <Carousel transitionDuration={500} responsive={responsive} draggable={true} ssr={true} removeArrowOnDeviceType={['']} >
                {
                    recommends ?
                    recommends.map((recommend, index) => {
                        return <RecommendItem key={index} recommend={recommend} />
                    }) : <div></div>
                }
                </Carousel>
            </div>
        </div>
    )
}

export default Recommend;
