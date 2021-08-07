import React from 'react';
import Image from 'next/image';
import {CollectionIcon, CalendarIcon, HeartIcon, StarIcon} from '@heroicons/react/outline';

function Similarity({similarity}) {
    const URL_IMAGE = "https://image.tmdb.org/t/p/original";
    return (
        <div className="cursor-pointer w-72 h-36 rounded-md mb-10 relative group">
            <Image className="object-none rounded-md" src={`${URL_IMAGE}${similarity.backdrop_path || similarity.poster_path}` || `${BASE_URL}${similarity.poster_path}`} alt="" width={288} height={144} />
            <div className="flex justify-between text-white">
                <p className="truncate">{similarity.title || similarity.original_title}</p>
                <p>{Math.round(similarity.vote_average * 10)}%</p>
            </div>
            <div className="flex justify-around items-center text-black absolute bottom-0 rounded-md w-full h-10 bg-white opacity-0 group-hover:opacity-80 transition-all ease-linear 0.3s">
                <div className="flex items-center">
                    <CalendarIcon className="h-4 mr-1" />
                    <p>{similarity.release_date}</p>
                </div>
                <div className="flex items-center">
                    <CollectionIcon className="h-4 mr-1" />
                    <HeartIcon className="h-4 mr-1" />
                    <StarIcon className="h-4" />
                </div>
            </div>
        </div>
    )
}

export default Similarity;
