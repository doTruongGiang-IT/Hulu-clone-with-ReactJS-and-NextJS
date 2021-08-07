import React from 'react';
import Image from 'next/image';
import profile from '../public/profile.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

function CrewItem({cast, crew}) {
    const URL_IMAGE = "https://image.tmdb.org/t/p/original/";
    let router = useRouter();

    return (
        <>
        {   
            crew ?
            <Link href={`${router.asPath}/${crew.id}`}>
                <a className="bg-white shadow-2xl mr-10 mb-5 rounded-md w-80 h-24 flex cursor-pointer hover:scale-95 transition-all 0.3s">
                    <Image className="object-contain rounded-md" src={crew.profile_path ? `${URL_IMAGE}${crew.profile_path}` : profile} alt="" width={64} height={96} />
                    <div className="ml-10 flex flex-col justify-center items-start">
                        <h2 className="text-lg font-bold" style={{"color": "#06202A"}}>{crew.name}</h2>
                        <h2 className="text-sm" style={{"color": "#06202A"}}>Job: {crew.job}</h2>
                        <p className="text-sm" style={{"color": "#06202A"}}>Dept: {crew.department}</p>
                    </div>
                </a>
            </Link>
            : ""
        }
        {   
            cast ?
            <Link href={`${router.asPath}/${cast.id}`}>
                <a className="bg-white shadow-2xl mr-10 mb-5 rounded-md w-80 h-24 flex cursor-pointer hover:scale-95 transition-all 0.3s">
                    <Image className="object-contain rounded-md" src={cast.profile_path ? `${URL_IMAGE}${cast.profile_path}` : profile} alt="" width={64} height={96} />
                    <div className="ml-10 flex flex-col justify-center items-start">
                        <h2 className="text-lg font-bold" style={{"color": "#06202A"}}>{cast.name}</h2>
                        <h2 className="text-sm" style={{"color": "#06202A"}}>Job: {cast.known_for_department}</h2>
                        <p className="text-sm" style={{"color": "#06202A"}}>Dept: {cast.known_for_department}</p>
                    </div>
                </a>
            </Link>
            : ""
        }
        </>
    )
}

export default CrewItem;