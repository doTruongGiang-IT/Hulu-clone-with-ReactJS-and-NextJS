import React from 'react';
import Head from 'next/head';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import MovieDetail from '../../../components/MovieDetail';
import Cast from '../../../components/Cast';
import Review from '../../../components/Review';
import Media from '../../../components/Media';
import Recommend from '../../../components/Recommend';
import Navbar from '../../../components/Navbar';

export async function getServerSideProps(context) {
    const id = context.query.id;
    return {
      props: {
        id
      }
    }
};

function Details({id}) {
    let dispatch = useDispatch();
    const movieDetail = useSelector(state => state.detailReducer);
    const credits = useSelector(state => state.creditsReducer);
    const reviews = useSelector(state => state.reviewsReducer);
    const media = useSelector(state => state.mediaReducer);
    const similarities = useSelector(state => state.similarityReducer);
    const recommends = useSelector(state => state.recommendReducer);

    useEffect(() => {
        dispatch(actions.getMovieDetailRequest(id));
    }, [movieDetail.id]);// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        dispatch(actions.getCastsRequest(id));
    }, [credits.list.id])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        dispatch(actions.getReviewsRequest(id));
    }, [reviews.id])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        dispatch(actions.getMediaRequest(id));
    }, [media.id])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        dispatch(actions.getSimilaritiesRequest(id));
    }, [similarities.id])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        dispatch(actions.getRecommendationsRequest(id));
    }, [recommends.id])// eslint-disable-line react-hooks/exhaustive-deps

    let storeId = (id) => {
        let arrFavors = JSON.parse(localStorage.getItem("idFavors"));
        if(arrFavors !== null) {
            let index = arrFavors.findIndex(favor => {
                return favor === id;
            });
            if(index === -1) {
                arrFavors.push(id);
            };
            localStorage.setItem("idFavors", JSON.stringify(arrFavors));
        }else {
            localStorage.setItem("idFavors", JSON.stringify([]));
            arrFavors = JSON.parse(localStorage.getItem("idFavors"));
            let index = arrFavors.findIndex(favor => {
                return favor === id;
            });
            if(index === -1) {
                arrFavors.push(id);
            };
            localStorage.setItem("idFavors", JSON.stringify(arrFavors));
        };
    };

    return (
        <div>
            <Head>
                <title>Hulu - Details</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <MovieDetail details={movieDetail} idFavor={storeId} /> 
            <Cast casts={credits.list.cast} />
            <Review reviews={reviews.results} />
            <Media media={media.results} similarities={similarities.results} />
            <Recommend recommends={recommends.results} />
        </div>
    )
}

export default Details;
