import React from 'react';
import CastItem from './CastItem';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Cast({casts}) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
    };
    const router = useRouter();

    return (
        <div className="ml-20 mr-20 mt-10 mb-10">
            <h2 className="text-white text-xl">Series Cast</h2>
            <div className="mt-10 mb-10">
                <Carousel transitionDuration={500} responsive={responsive} draggable={true} ssr={true} removeArrowOnDeviceType={['']} >
                {   
                    casts ?
                    casts.map((cast, index) => {
                        return <CastItem key={index} cast={cast} />
                    }) : <div></div>
                }
                </Carousel>
            </div>
            <Link href={`/${router.query.genre}/${router.query.id}/credits`}><a><h2 className="cursor-pointer text-xl text-white hover:text-gray-500 w-40">Full Cast & Crew</h2></a></Link>
            <hr className="mt-10 mb-10" />
        </div>
    )
}

export default Cast;