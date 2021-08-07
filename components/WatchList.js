import React, {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WatchItem from './WatchItem';

function WatchList({account, remove}) {
    const [tabIndex, setTabIndex] = useState(1);

    let passRemoveID = (id) => {
        remove(id);
    };

    return (
        <div className="bg-white px-20 py-5">
            <div className="flex justify-start items-start">
                <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                    <TabList>
                        <Tab disabled><h2 className="text-md sm:text-3xl text-black font-bold">Your WatchList</h2></Tab>
                        <Tab><p className="text-md text-black">Movie</p></Tab>
                        <Tab><p className="text-md text-black">TV</p></Tab>
                    </TabList>
                    <TabPanel></TabPanel>
                    <TabPanel>
                    {
                        account.favorite ?
                        account.favorite.map((favorite, index) => {
                            if(favorite.id) {
                                return <WatchItem key={index} details={favorite} removeID={passRemoveID} />
                            };
                        }) :
                        ""
                    }
                    </TabPanel>
                    <TabPanel></TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default WatchList;
