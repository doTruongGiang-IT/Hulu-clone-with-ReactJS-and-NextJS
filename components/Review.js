import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import ReviewItem from './ReviewItem';

function Review({reviews}) {
    const router = useRouter();
    return (
        <div className="ml-20 mr-20 mt-10 mb-10">
            <h2 className="text-white text-xl">Social<span className="text-white text-lg ml-10 border-b-4">Reviews</span></h2>
            <div className="mt-10 mb-10">
                {
                    reviews ?
                    reviews.map((review, index) => {
                        if(index <= 1) {
                            return <ReviewItem key={index} review={review} />
                        };
                    }) :
                    <p className="text-white">We do not have any reviews for Sweet Tooth. Would you like to write one?</p>
                }
            </div>
            <Link href={`/${router.query.genre}/${router.query.id}`}><a><h2 className="cursor-pointer text-xl text-white hover:text-gray-500 w-40">Read all reviews</h2></a></Link>
            <hr className="mt-10 mb-10" />
        </div>
    )
}

export default Review;
