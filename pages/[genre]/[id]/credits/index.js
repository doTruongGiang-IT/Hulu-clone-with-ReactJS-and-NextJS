import React from 'react';
import Head from 'next/head';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../redux/actions/index';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {ArrowLeftIcon} from '@heroicons/react/outline';
import CrewItem from '../../../../components/CrewItem';
import Navbar from '../../../../components/Navbar';

export async function getServerSideProps(context) {
    const id = context.query.id;
    return {
      props: {
        id
      }
    }
};

function Credits({id}) {
    const URL_IMAGE = "https://image.tmdb.org/t/p/original/";
    let dispatch = useDispatch();
    let router = useRouter();
    const movieDetail = useSelector(state => state.detailReducer);
    const credits = useSelector(state => state.creditsReducer);

    useEffect(() => {
        dispatch(actions.getMovieDetailRequest(id));
    }, [movieDetail.id]);// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        dispatch(actions.getCastsRequest(id));
    }, [credits.list.id])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Head>
                <title>Hulu - Credits</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="mt-5 mb-5 relative">
                <Image className="object-cover object-center opacity-50" layout="responsive" src={`${URL_IMAGE}${movieDetail.backdrop_path || movieDetail.poster_path}` || `${URL_IMAGE}${movieDetail.poster_path}`} alt="" width={1920} height={300} />
                <div className="absolute top-0 left-20 flex h-full w-96 justify-around">
                    <Image className="opacity-0 sm:opacity-100 object-cover object-center" src={`${URL_IMAGE}${movieDetail.backdrop_path || movieDetail.poster_path}` || `${URL_IMAGE}${movieDetail.poster_path}`} alt="" width={192} height={300} />
                    <div className="flex justify-center items-start flex-wrap ml-5 sm:flex-col">
                        <p className="text-base sm:text-xl mb-3 text-white">{movieDetail.title} <span className="opacity-0 sm:opacity-100 text-sm text-white">({movieDetail.release_date})</span></p>
                        <Link href={`/${router.query.genre}/${router.query.id}`}><a className="flex justify-center items-center text-white opacity-0 sm:opacity-100"><ArrowLeftIcon className="h-6 mr-3"></ArrowLeftIcon><span>Back to main</span></a></Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-around sm:flex-row sm:items-start">
                <div>
                    <h2 className="text-white text-2xl mb-10">Serries Casts</h2>
                    {
                        credits.list.cast ?
                        credits.list.cast.map((cast, index) => {
                            return <CrewItem key={index} cast={cast}  />
                        }) : ""
                    }
                </div>
                <div>
                    <h2 className="text-white text-2xl mb-10">Serries Crews</h2>
                    {
                        credits.list.crew ?
                        credits.list.crew.map((crew, index) => {
                            return <CrewItem key={index} crew={crew}  />
                        }) : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default Credits;
