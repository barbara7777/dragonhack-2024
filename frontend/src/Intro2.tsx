import Header from "./Header.tsx";
import {Link, Outlet} from "react-router-dom";

import ArrowRight from './assets/arrowRight.svg'

function TextInput({title}) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="text-gray-600 text-sm font-light">{title}</label>
            <input type="text" className="border-2 border-gray-300 rounded-lg p-2 w-full"/>
        </div>
    )
}

export default function Intro2() {
    return (
        <>
            <div className="h-screen max-h-screen w-screen flex flex-row justify-center bg-gray-100">
                <div
                    className="h-screen max-h-screen  bg-[url(intro1-bg.png)] bg-cover w-[550px] border-x-2 border-x-gray-300 gap-8 flex p-20 flex-col bg-gray-50 items-center justify-center">

                    <h1 className="text-3xl font-bold text-white text-center text-wrap mb-2">Let's get to know each
                        other!</h1>

                    <div className="flex flex-col gap-4 bg-white p-8 rounded-xl">
                        <TextInput title="Username"/>
                        <div className="flex flex-row gap-6 mt-6 items-center">
                            <div className="w-32 h-32 bg-[url('logo.png')] bg-cover grayscale rounded-full"></div>
                            <div className="flex flex-col gap-4 grow">
                                <div className="py-2 px-4 border-2 border-gray-300 rounded-xl w-full text-center">Upload
                                    Image
                                </div>
                                <div
                                    className="py-2 px-4 border-2 border-gray-300 rounded-xl w-full text-center">Generate
                                    Image
                                </div>
                            </div>
                        </div>
                        <TextInput title="Name"/>

                        <TextInput title="Surname"/>
                    </div>

                    <div className="flex flex-row gap-4 w-full">

                        <Link to="/intro" className="  py-4 px-12 hover:cursor-pointer 1/4">
                            <img src={ArrowRight} className="" />
                        </Link>

                        <Link to="/intro3" className="text-2xl shadow-xl hover:shadow-2xl    font-bold text-purple-700  py-4 px-12 rounded-full hover:cursor-pointer bg-white hover:bg-gray-100">
                            <img src={ArrowRight} />
                        </Link>
                    </div>

                </div>
            </div>

        </>
    )
}