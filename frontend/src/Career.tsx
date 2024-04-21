import Award from "./assets/award.svg"
import Document from "./assets/document.svg"
import Hat from "./assets/hat.svg"
import {Link} from "react-router-dom";
import {useState} from "react";

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

            translate-x-36 data-[pos=true]:translate-x-[-135px]
            bg-gray-200 w-36 p-2.5 rounded-lg">
            <h3 className="font-bold text-lg">{title}</h3>
            <Link to={link} className="bg-white py-2 px-4 rounded-xl w-full text-center text-sm uppercase">Visit&nbsp;&nbsp;→</Link>
        </div>
    )

}


export default function Career() {
    const skills = [
        {
            companyName: "HealthSync",
            tags: "Software Engineer, Health Informatics"
        },
        {
            companyName: "AeroDynamics Tech",
            tags: "Lead Developer, Aerospace Software Systems"
        },
        {
            companyName: "Educatove Interactive",
            tags: "Mobile Developer, Educational Apps"
        },
    ]


    return (
        <div className="p-10 relative grow flex flex-col gap-[25px] items-center overflow-y-hidden bg-[url('/2-bg.png')] bg-cover">
            <h1 className="text-3xl text-white font-bold mb-8">Top Job Offers</h1>
            {skills.map(skill => (
                <div className="p-8 flex flex-col gap-1 bg-white rounded-2xl w-full">
                    <h2 className="font-extrabold text-2xl">{skill.companyName}</h2>
                    <h3 className=" text-lg text-gray-600">{skill.tags}</h3>
                    <span className="mt-4 text-center rounded-full text-white hover:cursor-pointer select-none font-semibold bg-gradient-to-r from-[#4367E8] via-[#A192FF] to-[#A46CEB] py-2 px-10 w-full">Apply Now</span>
                </div>
            ))}
        </div>
    )
}