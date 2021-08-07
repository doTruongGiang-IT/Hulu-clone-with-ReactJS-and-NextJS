import React from 'react';
import {ThumbUpIcon, HeartIcon, StarIcon} from '@heroicons/react/outline';
import Image from 'next/image';

function CreditImage({image}) {
    const URL_IMAGE = "https://image.tmdb.org/t/p/original/";

    return (
        <div className="lg:w-72 lg:h-80 rounded-md text-[#06202A] flex flex-col justify-center items-center mr-6 mb-6 relative group cursor-pointer">
            <Image className="object-cover rounded-md" src={`${URL_IMAGE}${image.file_path}`} alt="images" width={288} height={320} />
            <div className="flex justify-around items-center text-black absolute bottom-0 rounded-md w-full h-10 bg-white opacity-0 group-hover:opacity-80 transition-all 0.3s">
                <div className="flex items-center">
                    <ThumbUpIcon className="h-4 mr-1" />
                    <HeartIcon className="h-4 mr-1" />
                    <StarIcon className="h-4" />
                </div>
            </div>
        </div>
    )
}

export default CreditImage;
