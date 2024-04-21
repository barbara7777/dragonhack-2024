import Header from "./Header.tsx";
import {Link, Outlet} from "react-router-dom";
import {useState} from "react";

import ArrowRight from "./assets/arrowRight.svg";

function TextInput({title}) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="text-gray-600 text-sm font-light">{title}</label>
            <input type="text" className="border-2 border-gray-300 rounded-lg p-2 w-full"/>
        </div>
    )
}

function SkillSelect({title}) {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div
            data-isSelected={isClicked}
            onClick={() => setIsClicked(!isClicked)}
            className="text-sm transition transition-all w-full ease-in-out delay-1000 font-semibold  py-3 px-6 bg-gray-300 data-[isSelected=true]:bg-gradient-to-br from-indigo-200 to-cyan-400 rounded-3xl">{title}</div>
    )
}

export default function Intro5() {
    const skills = ["Career Start", "Career Development", "Better Soft Skills"]

    return (
        <>
            <div className="h-screen max-h-screen w-screen flex flex-row justify-center bg-gray-100">
                <div
                    className="h-screen max-h-screen bg-[url(intro1-bg.png)] bg-cover w-[550px] border-x-2 border-x-gray-300 gap-8 flex p-20 flex-col bg-gray-50 items-center justify-center">

                    <h1 className="text-3xl font-bold text-white text-wrap text-center mb-2">Tell us your
                        skills:</h1>

                    <div className="flex flex-col gap-4 bg-white p-8 rounded-xl w-full">
                        <div className="flex flex-col flex-wrap gap-2 w-full">
                            {skills.map(skill => (
                                <SkillSelect title={skill}/>
                            ))}


                        </div>
                    </div>


                    <Link to="/intro6"
                          className="text-2xl shadow-xl hover:shadow-2xl    font-bold text-purple-700  py-4 px-12 rounded-full hover:cursor-pointer bg-white hover:bg-gray-100">
                        <img src={ArrowRight}/>
                    </Link>
                </div>
            </div>

        </>
    )
}