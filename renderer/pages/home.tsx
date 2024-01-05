import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import moment from "moment";
import {LuCameraOff, LuServer} from "react-icons/lu";

export default function HomePage() {

    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const timeString = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

            setCurrentTime(timeString);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
    <React.Fragment>
        <Head>
        <title>Signage Display 1</title>
        </Head>
        <div className="w-full h-full bg-black flex flex-col bg-center bg-cover overflow-hidden" style={{backgroundImage: "url('/images/BG1.jpeg')"}}>
            <div className="w-full h-full bg-gradient-to-t from-black to-transparent flex flex-col">
                <div className="flex flex-col mt-5 mr-5 ml-auto mb-auto">
                    <div className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg py-2 px-4 rounded-xl text-white flex flex-row">
                        <LuServer className="my-auto mr-2 text-rams" />
                        <span className="my-auto">
                            Connected to Identity Server at {' '}<b>77.29.1.2</b>
                        </span>
                    </div>
                </div>
                <div className="flex flex-row mt-auto ml-5">
                    <div className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg py-4 px-8 rounded-3xl text-white flex flex-row">
                        <LuCameraOff className="my-auto mr-2 text-rams h-32 w-32" />
                        <div className="flex flex-col my-auto ml-3">
                            <p className="font-semibold text-2xl">
                                Can not authenticate with a Camera
                            </p>
                            <p className="mt-2 w-96 text-rams">Real time connection to authentication services have failed. Camera authentication will be unavailable until the connection is restored.</p>
                        </div>

                    </div>
                </div>
                <p className="text-[300pt] mr-auto -mt-32 ml-5 text-white">{currentTime}</p>
                <p className="text-9xl ml-8 -mt-32 mb-20 text-white">{`${moment().format('dddd, MMMM Do YYYY')}`}</p>
            </div>
            <div className="flex flex-row w-full mt-auto h-20 bg-rams">
                <p className="text-3xl font-semibold ml-5 my-auto">Welcome to the Workshop.</p>
                <div className="h-8 w-32 mt-1 ml-auto mr-5">
                    <Image src="/images/LogoBlackYellow.png" className="my-auto" height={100} width={180} />
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}
