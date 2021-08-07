import React from 'react';
import Head from 'next/head';
import Stats from '../../components/Stats';
import Infor from '../../components/Infor';
import Story from '../../components/Story';
import Navbar from '../../components/Navbar';

function About() {
    return (
        <div className="overflow-hidden">
            <Head>
                <title>Hulu - About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Stats />
            <Infor />
            <Story />
        </div>
    )
}

export default About;
