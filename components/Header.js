import React, {useRef} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {HomeIcon, CollectionIcon, SearchIcon, UserIcon, InformationCircleIcon} from '@heroicons/react/outline';
import Link from 'next/link';

function Header() {
    let userLogin = useRef();
    let users = useRef();
    let username = useRef();
    const router = useRouter();
    if(typeof window !== 'undefined') {
        userLogin = JSON.parse(localStorage.getItem("login"));
        if(userLogin !== null) {
            users = JSON.parse(localStorage.getItem("users"));
            username = users.find(user => {
                return user.email === userLogin.email;
            });
        };
    };

    let logout = () => {
        localStorage.removeItem("login");
        localStorage.removeItem("sessionID");
        router.push("/");
    };

    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <Link href="/"><a><HeaderItem title="HOME" Icon={HomeIcon} /></a></Link>
                <Link href="/about"><a><HeaderItem title="ABOUT" Icon={InformationCircleIcon} /></a></Link>
                {
                    userLogin ?
                    <Link href="/collections"><a><HeaderItem title="COLLECTIONS" Icon={CollectionIcon} /></a></Link> :
                    <Link href="/"><a><HeaderItem title="COLLECTIONS" Icon={CollectionIcon} /></a></Link>
                }
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                {/* <input className="h-8 p-3 rounded-full outline-none" style={{color: "#06202A"}} type="text" placeholder="Input search key ..." /> */}
                {
                    userLogin ?
                    <button type="button" onClick={logout}><HeaderItem title={username.firstName} Icon={UserIcon} /></button> :
                    <Link href="/auth"><a><HeaderItem title="LOGIN" Icon={UserIcon} /></a></Link>
                }
            </div>
            <Link href="/"><a><Image className="object-contain" src="https://links.papareact.com/ua6" alt="" width={200} height={100} /></a></Link>
        </header>
    )
}

export default Header;
