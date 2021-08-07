import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import hulu from '../public/hulu.jpg';

function Infor() {
    useEffect(() => {
        AOS.init();
        window.addEventListener('touchmove', () => {
            AOS.refresh()
        }, false);
    });

    return (
        <div className="flex justify-around border-b-2">
            <div className="pb-10" 
                data-aos="flip-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
            >
                <Image className="opacity-0 sm:opacity-100" src={hulu} alt="" height={380} width={380} />
            </div>
            <div className="pb-10 sm:w-1/3 md:w-1/2"
                data-aos="fade-up-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
            >
                <h2 className="text-4xl font-bold mb-10">About Hulu</h2>
                <p className="sm:text-xs md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
            </div>
        </div>
    )
}

export default Infor;
