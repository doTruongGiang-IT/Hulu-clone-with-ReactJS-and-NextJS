import React from 'react';
import Thumbnail from './Thumbnail';

function Container({results, genre}) {
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 3xl:flex flex-wrap justify-center">
            {
                results ?
                results.map((movie, index) => {
                    return <Thumbnail key={index} movie={movie} genre={genre} />
                }) : ""
            }
        </div>
    )
}

export default Container;
