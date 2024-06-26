import Pencil from './assets/pencil.svg'

export default function Career() {
    const skills = [
        {
            companyName: "BE-terna",
            tags: "Solutions Architect"
        },
        {
            companyName: "Landis+Gyr",
            tags: "Associate Solutions Architect"
        },
        {
            companyName: "Celtra",
            tags: "QA Engineer"
        },
    ]


    return (
        <div
            className="p-10 relative grow flex flex-col gap-[25px] items-center overflow-y-hidden bg-[url('/2-bg.png')] bg-cover">
            <h1 className="text-3xl text-white font-bold">Top Job Offers</h1>
            <h2 className="text-lg text-white font-semibold mb-4">Best jobs matched with your skills</h2>
            {skills.map(skill => (
                <div className="p-8 flex flex-col gap-1 bg-white rounded-2xl w-full">
                    <h2 className="font-extrabold text-2xl">{skill.companyName}</h2>
                    <h3 className=" text-lg text-gray-600">{skill.tags}</h3>
                    <span
                        className="mt-4 flex flex-row gap-3 justify-center text-center rounded-full text-white hover:cursor-pointer select-none font-semibold bg-gradient-to-r from-[#4367E8] via-[#A192FF] to-[#A46CEB] py-2 px-10 w-full">
                        <img src={Pencil} />
                        <span>Update CV & Apply Now!</span>
                    </span>
                </div>
            ))}
        </div>
    )
}