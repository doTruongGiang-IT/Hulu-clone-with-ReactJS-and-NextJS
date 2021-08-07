import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {CollectionIcon, PlayIcon} from '@heroicons/react/outline';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function MovieDetail({details, idFavor}) {
    const URL_IMAGE = "https://image.tmdb.org/t/p/original/";
    let passFavorites = (id) => {
        idFavor(id);
    };

    return (
        <div className="mt-5 mb-5 relative">
            <Image className="object-cover object-top opacity-30" layout="responsive" src={`${URL_IMAGE}${details.backdrop_path || details.poster_path}` || `${URL_IMAGE}${details.poster_path}`} alt="" width={1920} height={650} />
            <div className="sm:absolute top-5 left-10 flex">
                <div className="ml-10">
                    <h2 className="font-bold text-2xl mb-3">{details.title} <span>({details.release_date})</span></h2>
                    <div className="mb-5">
                        <span className="mr-3 border-2 p-1 text-xs">TV-14</span>
                        {
                            details.genres ?
                            details.genres.map((genre, index) => {
                                return <p className="inline-block mr-3" key={index}>{genre.name}</p>
                            }) :
                            ""
                        }
                    </div>
                    <div className="flex">
                        <div style={{ width: 50, height: 50 }}>
                            <CircularProgressbar 
                                value={details.vote_average * 10} 
                                text={`${details.vote_average * 10}%`}
                                styles={buildStyles({
                                    textSize: '24px',
                                    pathTransitionDuration: 2,
                                    pathColor: `green`,
                                    textColor: "white",
                                    trailColor: "white",
                            })} />
                        </div>

                        <span className="ml-2">User<br />Score</span>
                        <button type="button" onClick={() => passFavorites(details.id)} className="ml-10 flex items-center justify-center cursor-pointer border-2"style={{"height": "50px", "width": "50px", "backgroundColor": "#06202A", "borderRadius": "25px"}}>
                            <CollectionIcon className="h-4" />
                        </button>
                        <Link href="#trailer">
                            <a className="flex items-center cursor-pointer ml-10">
                                <PlayIcon className="h-12" />
                                <span>Play trailer</span>
                            </a>
                        </Link>  
                    </div>
                    <h2 className="text-2xl text-white mt-5">Overview</h2>
                    <p className="sm:text-xs md:text-base">{details.overview}</p>
                    <h2 className="text-2xl text-white mt-5 sm:opacity-0 md:opacity-100">Companies</h2>
                    {
                        details.production_companies ?
                        details.production_companies.map((company, index) => {
                            return <p className="inline-block mr-3 sm:opacity-0 md:opacity-100" key={index}>{company.name}</p>
                        }) :
                        ""
                    }
                    <h2 className="text-2xl text-white mt-5 sm:opacity-0 md:opacity-100">Countries</h2>
                    {
                        details.production_countries ?
                        details.production_countries.map((country, index) => {
                            return <p className="inline-block mr-3 sm:opacity-0 md:opacity-100" key={index}>{country.name}</p>
                        }) :
                        ""
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;
