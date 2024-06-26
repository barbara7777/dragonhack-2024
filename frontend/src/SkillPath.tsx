import Award from "./assets/skill4.svg"
import Document from "./assets/skill5.svg"
import {Link} from "react-router-dom";
import {useState} from "react";

import ArrowRight from "./assets/arrowRight.svg";
import QuestionMark from "./assets/qmark.svg"
import JobIcom from "./assets/jobicon.svg"
import DocSkill from "./assets/docskill.svg"

import Zigzag from "./assets/zigzag.svg"

function Tooltip({title, visible, link, loc}) {
    return (
        <div
            data-pos={loc === "left"}
            data-visible={visible}
            className="z-50 data-[visible=true]:flex flex-col gap-2 items-center hidden absolute

            translate-x-48 data-[pos=true]:translate-x-[-185px]
            bg-gray-200 w-64 p-2.5 rounded-2xl">
            <h3 className="font-bold text-lg">{title}</h3>
            <Link to={link}
                  className="bg-white py-2 px-4 rounded-xl w-full text-center text-sm uppercase">Visit&nbsp;&nbsp;→</Link>
        </div>
    )

}


export default function SkillPath() {
    const skills = [
        {
            icon: QuestionMark,
            title: "Identify your skills",
            link: "/task",
            transformX: "-90px",
            tooltipOn: "right",
            isNext: false

        },
        {
            icon: JobIcom,
            title: "Find relevant companies",
            link: "/task",
            transformX: "90px",
            tooltipOn: "left",
            isNext: false
        },
        {
            icon: DocSkill,
            title: "Make your CV shine",
            link: "/task",
            transformX: "-100px",
            tooltipOn: "right",
            isNext: true
        },
        {
            icon: Award,
            title: "TODO",
            link: "/task",
            transformX: "110px",
            tooltipOn: "left",
            isNext: false
        },
        {
            icon: Document,
            title: "TODO",
            link: "/task",
            transformX: "-70px",
            tooltipOn: "right",
            isNext: false
        }
    ]

    const [tooltipNumber, setTooltipNumber] = useState(-1)

    return (
        <div className="grow flex flex-col">
            <header className="h-16 px-4 justify-between flex flex-row  content-center items-center flex-none">
                <img src={ArrowRight} className="rotate-180"/>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#4367E8] to-[#A46CEB]
                    text-transparent bg-clip-text">Education</h1>
            </header>
            <div
                className="p-10 relative grow flex flex-col-reverse justify-between pb-20 items-center overflow-y-hidden bg-[url('/2-bg.png')] bg-cover">

                <img className="absolute w-full h-[95%] top-20" src={Zigzag}/>
                {skills.map((skill, index) => {
                    const ringColor = index < 2 ? "" : "ring-gray-200"
                    const ringWidth = index == 2 ? "ring-8" : ""
                    const animate = index == 2 ? "animate-bounce" : ""
                    const skillBg = index == 2 ? "bg-white" : (index > 2 ? "bg-gray-100" : "bg-gray-100")
                    return (
                        <div className="relative flex flex-col items-center justify-center"
                             style={{transform: `translateX(${skill.transformX})`}}>
                            <div
                                // to={skill.link}
                                onClick={() => setTooltipNumber(index)}
                                className="z-10 flex hover:cursor-pointer flex-col gap-2 items-center"
                            >
                                <div className={`
                            rounded-full ${ringWidth} ${ringColor} ${animate} ring-offset-2  w-24 h-24 ${skillBg} shadow-2xl
                            flex items-center justify-center p-5`}
                                >
                                    <img src={skill.icon}/>
                                </div>
                            </div>
                            <Tooltip title={skill.title} link={skill.link} visible={index === tooltipNumber}
                                     loc={skill.tooltipOn}/>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}