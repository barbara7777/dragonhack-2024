import {Link} from "react-router-dom";
import {useState} from "react";

import ArrowRight from "./assets/arrowRight.svg";
import ArrowLeft from "./assets/arrowLeft.svg";

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
                        goals:</h1>

                    <div className="flex flex-col gap-4 bg-white p-8 rounded-xl w-full">
                        <div className="flex flex-col flex-wrap gap-2 w-full">
                            {skills.map(skill => (
                                <SkillSelect title={skill}/>
                            ))}


                        </div>
                    </div>


                    <div className="flex flex-row gap-4 w-full">

                        <Link to="/intro4"
                              className="  py-4 px-2 flex items-center text-center justify-center hover:cursor-pointer basis-1/4">
                            <img src={ArrowLeft} className=""/>
                        </Link>

                        <Link to="/intro6"
                              className="text-2xl flex justify-center shadow-xl hover:shadow-2xl  basis-3/4  font-bold text-purple-700  py-4 px-12 rounded-full hover:cursor-pointer bg-white hover:bg-gray-100">
                            <img src={ArrowRight}/>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}