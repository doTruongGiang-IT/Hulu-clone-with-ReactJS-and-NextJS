import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {XCircleIcon} from '@heroicons/react/outline';

function WatchItem({details, removeID}) {
    const router = useRouter();
    const URL_IMAGE = "https://image.tmdb.org/t/p/original/";

    let removeItem = (id) => {
        removeID(id);
    };

    return (
        <div className="bg-white rounded-lg mb-10 flex items-center justify-start transition-all 0.5s sm:hover:scale-95 sm:border-2 sm:shadow-2xl">
            <div className="h-44 w-36 cursor-pointer">
                <Link href={`${router.route}/${details.id}`} >
                    <a>
                        <Image className="rounded-lg sm:rounded-br-none sm:rounded-tr-none object-cover object-center" src={`${URL_IMAGE}${details.backdrop_path || details.poster_path}` || `${URL_IMAGE}${details.poster_path}`} alt="favorite" height={176} width={144} />
                    </a>
                </Link>
            </div> 
            <div className="px-5 py-5 flex flex-col justify-center items-start">
                <div className="flex items-center justify-start">
                    <div className="mr-3 opacity-0 sm:opacity-100" style={{ width: 50, height: 50 }}>
                        <CircularProgressbar 
                            value={details.vote_average * 10} 
                            text={`${details.vote_average * 10}%`}
                            styles={buildStyles({
                                textSize: '24px',
                                pathTransitionDuration: 2,
                                pathColor: `green`,
                                textColor: "#06202A",
                                trailColor: "gray",
                        })} />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <h2 className="text-[#06202A] text-2xl font-bold truncate lg:max-w-6xl opacity-0 sm:opacity-100 sm:max-w-sm">{details.title}</h2>
                        <p className="opacity-0 sm:opacity-100">{details.release_date}</p>
                    </div>
                </div>
                <p className="text-[#06202A] mb-3 mt-3 truncate lg:max-w-6xl opacity-0 sm:opacity-100 sm:max-w-sm">{details.overview}</p>
                <div onClick={() => removeItem(details.id)} className="flex items-center justify-start cursor-pointer">
                    <XCircleIcon className="h-8 text-black" />
                    <p className="text-[#06202A] font-medium">Remove</p>
                </div>
            </div>
        </div>
    )
}

export default WatchItem;
