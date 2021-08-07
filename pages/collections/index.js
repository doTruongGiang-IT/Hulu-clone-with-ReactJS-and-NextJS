import React, {useRef} from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions/index';
import Head from 'next/head';
import AccountInfo from '../../components/AccountInfo';
import WatchList from '../../components/WatchList';

function Collection() {
    let userLogin = useRef();
    let users = useRef();
    let account = useRef();
    let accounts = useRef();
    let idFavors = useRef();
    let dispatch = useDispatch();
    const movieDetail = useSelector(state => state.detailReducer);

    if(typeof window !== 'undefined') {
        userLogin = JSON.parse(localStorage.getItem("login"));
        idFavors = JSON.parse(localStorage.getItem("idFavors"));
        if(userLogin !== null) {
            users = JSON.parse(localStorage.getItem("users"));
            account = users.find(user => {
                return user.email === userLogin.email;
            });
        };
    };

    let identifiedAccount = () => {
        accounts = users.filter(user => {
            return user.email === userLogin.email;
        });
        accounts.forEach((item, index) => {
            if(index > 0) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                account = item;
            };
        });
    };

    let storeNewUsers = () => {
        let index = users.findIndex(user => {
            return user.id === account.id;
        });
        if(index !== -1) {
            users[index] = account;
            if(typeof window !== "undefined") {
                localStorage.setItem("users", JSON.stringify(users));
            };
        };
    };

    let removeFavor = (id) => {
        identifiedAccount();
        if(typeof window !== 'undefined') {
            let index = account.favorite.findIndex(favorite => {
                return favorite.id === id;
            });
            if(index !== -1) {
                account.favorite.splice(index, 1);
                storeNewUsers();
            };
        };
    };

    useEffect(() => {
        identifiedAccount();
        if(idFavors !== null) {
            idFavors.forEach(idFavor => {
                dispatch(actions.getMovieDetailRequest(idFavor));
                let index = account.favorite.findIndex(favorite => {
                    return favorite.id === movieDetail.id;
                });
                if(index === -1) {
                    account.favorite.push(movieDetail);
                    storeNewUsers();
                };
            });
        };
        localStorage.removeItem("idFavors");
    }, [movieDetail, account]);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="overflow-hidden">
            <Head>
                <title>Hulu - Collections</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AccountInfo account={account} />
            <WatchList account={account} remove={removeFavor} />
        </div>
    )
}

export default Collection;
