import React from 'react';
import Image from 'next/image';
import profile from '../public/profile.png';

function CastItem({cast}) {
    const URL_IMAGE = "https://image.tmdb.org/t/p/original/";
    return (
        <div className="bg-white shadow-2xl mr-10 mb-5 rounded-md w-40 h-72">
            <Image className="object-cover rounded-t-md" src={cast.profile_path ? `${URL_IMAGE}${cast.profile_path}` : profile} alt="" 
                width={160} height={175} />
            <h2 className="text-lg text-center font-bold" style={{"color": "#06202A"}}>{cast.name}</h2>
            <p className="text-center text-sm" style={{"color": "#06202A"}}>{cast.character}</p>
        </div>
    )
}

export default CastItem;
