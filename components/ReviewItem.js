import Image from 'next/image';
import React from 'react';

function ReviewItem({review}) {
    const SECURE_URL = "https://secure.gravatar.com/avatar";
    const URL_IMAGE = "https://image.tmdb.org/t/p/original";
    let avatar = review.author_details.avatar_path;
    if(avatar === null) {
        avatar = SECURE_URL;
    }else if(avatar.includes(SECURE_URL)) {
        avatar = avatar.substr(1);
    }else {
        avatar = URL_IMAGE.concat(avatar);
    };

    return (
        <div className="w-full h-28 bg-white rounded-md mb-10 relative overflow-hidden">
            <div className="bg-black rounded-full w-14 h-14 absolute top-4 left-5">
                <Image className="rounded-full object-cover" src={`${avatar}`} alt="" width={112} height={112} />
            </div> 
            <div className="absolute top-4 left-24">
                <h2 className="text-lg text-black font-bold">A review by {review.author_details.username}</h2>
                <p className="text-xs text-gray-400 opacity-0 sm:opacity-100">Written by {review.author_details.username} at {review.updated_at}</p>
            </div>
            <p className="text-black text-xs absolute top-20 left-24 sm:truncate sm:max-w-xs md:truncate md:max-w-md lg:truncate lg:max-w-6xl">{review.content}</p>
        </div>
    )
}

export default ReviewItem;
