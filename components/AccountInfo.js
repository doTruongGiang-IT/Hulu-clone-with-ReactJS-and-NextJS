import React from 'react';
import Image from 'next/image';
import profile from '../public/profile.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function AccountInfo({account}) {
    return (
        <div className="px-20 py-3 h-80 flex justify-start items-center border-t-2">
            <Image className="rounded-full" src={profile} alt="avatar" height={200} width={200} />
            <div className="ml-10 flex flex-col justify-center items-start">
                <h2 className="text-white text-3xl font-bold">{account.lastName+account.firstName}</h2>
                <div className="flex justify-start items-center mt-5">
                    <div className="mr-3" style={{ width: 50, height: 50 }}>
                        <CircularProgressbar 
                            value="0" 
                            text="0%"
                            styles={buildStyles({
                                textSize: '24px',
                                pathTransitionDuration: 2,
                                pathColor: `green`,
                                textColor: "white",
                                trailColor: "white",
                        })} />
                    </div>
                    <p className="text-white mr-3">Average Score Movie</p>
                    <span className="bg-white h-10 w-[1px]"></span>
                    <div className="ml-3 mr-3" style={{ width: 50, height: 50 }}>
                        <CircularProgressbar 
                            value="0" 
                            text="0%"
                            styles={buildStyles({
                                textSize: '24px',
                                pathTransitionDuration: 2,
                                pathColor: `green`,
                                textColor: "white",
                                trailColor: "white",
                        })} />
                    </div>
                    <p className="text-white mr-3">Average Score TV</p>
                </div>
            </div>
        </div>
    )
}

export default AccountInfo;
