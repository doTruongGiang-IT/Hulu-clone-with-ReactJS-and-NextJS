import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

function StoryItem({story}) {
    useEffect(() => {
        AOS.init();
        window.addEventListener('touchmove', () => {
            AOS.refresh()
        }, false);
    });

    return (
        <div className={`flex ${story.direction} justify-around mb-40 flex-`}>
            <div data-aos={`${story.animatePara}`}
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
            >
                <div className="pt-10 pb-10 text-black mr-28">
                    <h2 className="sm:text-lg md:text-4xl font-bold">{story.year}</h2>
                    <div className="flex flex-wrap mt-5">
                        <h2 className="sm:text-sm md:text-2xl font-bold">{story.title}</h2>
                        {/* style={{display: "-webkit-box", '-webkit-line-clamp': 2, '-webkit-box-orient': 'vertical'}} */}
                        <p className="sm:text-xs lg:text-base">{story.paragraph}</p>
                    </div>
                </div>
            </div>
            <div data-aos={`${story.animateImage}`}
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
            >
                <div className="pb-10 pt-10 mr-28">
                    <Image className="object-none opacity-0 sm:opacity-100" src={story.image} alt="hu lu" height={story.imageHeight} width={story.imageWidth} />
                </div>
            </div>   
        </div>
    )
}

export default StoryItem;
