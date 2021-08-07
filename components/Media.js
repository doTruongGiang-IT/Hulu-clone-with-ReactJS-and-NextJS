import React, {useState} from 'react';
import ReactPlayer from 'react-player/lazy';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Similarity from './Similarity';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Media({media, similarities}) {
    const YOUTUBE_URL = "https://www.youtube.com/watch?v=";
    const [tabIndex, setTabIndex] = useState(1);
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 640 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
    };

    return (
        <div className="ml-20 mr-20 mt-10 mb-10" id="trailer">
            <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                <TabList>
                    <Tab disabled><h2 className="text-xl text-white">Media</h2></Tab>
                    <Tab style={{backgroundColor: "#06202A"}}><h2 className="text-xl text-white">Trailer</h2></Tab>
                    <Tab style={{backgroundColor: "#06202A"}}><h2 className="text-xl text-white">Similarities</h2></Tab>
                    <Tab style={{backgroundColor: "#06202A"}}><h2 className="text-xl text-white">Posters</h2></Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel>
                    <div className="mt-10 mb-10 w-full h-96">
                    {
                        media ?
                        media.map((item, index) => {
                            if(index < 1) {
                                return <ReactPlayer key={index} url={`${YOUTUBE_URL}${item.key}`} width="100%" height="100%" controls={true} />
                            };
                        }) :
                        ""
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="mt-10 mb-10 w-full">
                        <Carousel transitionDuration={500} responsive={responsive} draggable={true} ssr={true} removeArrowOnDeviceType={['']} >
                            {
                                similarities ?
                                similarities.map((similarity, index) => {
                                    return <Similarity key={index} similarity={similarity} />
                                }) :
                                <p className="text-white mt-10">This movie does not have any similarities</p>
                            }
                        </Carousel>
                    </div>
                </TabPanel>
                <TabPanel><p className="text-white mt-10">This movie does not have posters</p></TabPanel>
            </Tabs>
            <hr className="mt-10 mb-10" />
        </div>
    )
}

export default Media;
