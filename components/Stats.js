import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import avatar from '../public/avatar.jpg';
import StatItem from './StatItem';

const statList = [
    {id: 0, name: "Movies", number: 664667},
    {id: 1, name: "TV Shows", number: 112859},
    {id: 2, name: "TV Seasons", number: 172745},
    {id: 3, name: "TV Episodes", number: 2655368},
    {id: 4, name: "People", number: 2120540},
    {id: 5, name: "Images", number: 2745936},
    {id: 6, name: "Edits Last Week", number: 284210},
    {id: 7, name: "Stats", number: 1},
]; 

function Stats() {
    useEffect(() => {
        AOS.init();
        window.addEventListener('touchmove', () => {
            AOS.refresh()
        }, false);
    });

    return (
        <div className="px-20 my-10 flex justify-around bg-white">
            <div className="pt-10 pb-10 text-black">
                <h2 className="text-4xl font-bold">Stats</h2>
                <p>We all love them. Here is a few that we find interesting.</p>
                <div className="flex flex-wrap mt-10">
                    {   
                        statList.map((stat, index) => {
                            return <StatItem key={index} stat={stat} />
                        })
                    }
                </div>
            </div>
            <div className="pt-10 pb-10"
                data-aos="zoom-in-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
            >
                <Image className="rounded-full opacity-0 sm:opacity-100" src={avatar} alt="big bang" height={380} width={380} />
            </div>
        </div>
    )
}

export default Stats;
