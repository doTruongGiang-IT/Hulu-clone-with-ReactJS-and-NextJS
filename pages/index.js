import Head from 'next/head';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions/index';

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  return {
    props: {
      genre: genre ? genre : "fetchTrending"
    }
  }
};

export default function Home({genre}) {
  let users = useRef();
  let dispatch = useDispatch();
  const movieList = useSelector(state => state.movieReducer);

  // Do not modified this "if" scope 
  if(typeof window !== 'undefined') {
    users = JSON.parse(localStorage.getItem("users"));
    if(users === null) {
      localStorage.setItem("users", JSON.stringify([
        {},      
        {firstName: "Do", lastName: "Giang", email: "admin@gmail.com", password: "Admin_123", token: "", type: "Sign in", favorite: []}
      ]));
    };
  };

  useEffect(() => {
    dispatch(actions.getMoviesRequest(genre));
  }, [genre]);// eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* Container */}
      <Container results={movieList} genre={genre} />
    </div>
  )
}
