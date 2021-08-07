import React from 'react';//#06202A
import Image from 'next/image';
import CreditImage from './CreditImage';
import instagram from '../public/instagram.svg';
import twitter from '../public/twitter.svg';

function CreditInfo({details, images}) {
    const URL_IMAGE = "https://image.tmdb.org/t/p/original/";

    return (
        <div className="bg-white px-20 py-10 flex items-start justify-start text-[#06202A] flex-col sm:flex-row">
            <div className="flex flex-col justify-start items-start">
                <div className="mr-5 mb-5 rounded-lg shadow-2xl sm:h-96 sm:w-80">
                    <Image className="object-cover rounded-lg" src={`${URL_IMAGE}${details.profile_path}`} alt="profile" height={384} width={320} />
                </div>
                <div className="flex mb-5">
                    <div className="mr-5">
                        <Image src={instagram} alt="profile" height={30} width={30} />
                    </div>
                    <div>
                        <Image src={twitter} alt="profile" height={30} width={30} />
                    </div>
                </div>
                <h2 className="text-3xl font-semibold mb-3">Personal Info</h2>
                <div className="mb-5">
                    <h3 className="font-medium">Know for</h3>
                    <p className="font-thin">{details.known_for_department ? details.known_for_department : '_'}</p>
                </div>
                <div className="mb-5">
                    <h3 className="font-medium">Gender</h3>
                    <p className="font-thin">
                        {
                            details.gender === 0 ? " Not specified" : (details.gender === 1 ? "Female" : "Male")
                        }
                    </p>
                </div>
                <div className="mb-5">
                    <h3 className="font-medium">Birthday</h3>
                    <p className="font-thin">{details.birthday ? details.birthday : "_"}</p>
                </div>
                <div className="mb-5">
                    <h3 className="font-medium">Deathday</h3>
                    <p className="font-thin">{details.deathday ? details.deathday : "_"}</p>
                </div>
                <div className="mb-5">
                    <h3 className="font-medium">Place of birth</h3>
                    <p className="font-thin">{details.place_of_birth ? details.place_of_birth : "_"}</p>
                </div>
                <div>
                    <h3 className="font-medium">Also know as</h3>
                    {
                        details.also_known_as ?
                        details.also_known_as.map((name, index) => {
                            return <p key={index} className="font-thin">{name}</p>
                        }) : "_"
                    }
                </div>
            </div>
            <div className="flex flex-col justify-start items-start mt-10 sm:mt-0">
                <h2 className="text-4xl font-bold mb-5">{details.name}</h2>
                <h2 className="text-2xl font-semibold mb-2">Biography</h2>
                <p>{details.biography}</p>
                <h2 className="text-2xl font-semibold mb-2 mt-2">Images</h2>
                <div className="sm:grid md:grid-cols-2 lg:grid-cols-3">
                {
                    images ? 
                    images.map((image, index) => {
                        return <CreditImage key={index} image={image} />
                    }) : <div></div>
                }
                </div>
            </div>
        </div>
    )
}

export default CreditInfo;
