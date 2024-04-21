export default function Profile() {
    const skills = [
        "React",
        "Team Leading",
        "Node.js",
        "Python",
        "Teamwork",
        "Docker"
    ]
    return (
        <div className="grow flex flex-col p-8 gap-8">

            {/*/!* Osnovna kartica *!/*/}
            {/*<div className="flex flex-row gap-8">*/}
            {/*    <img src="https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=1xw:0.84415xh;center,top"*/}
            {/*        className="rounded-full w-1/4 aspect-square object-cover*/}
            {/*        ring-cyan-400 ring-4 ring-offset-4*/}

            {/*        " />*/}
            {/*    <div className="flex flex-col gap-1.5 justify-center">*/}
            {/*        <h1 className="text-2xl font-bold">Gregor Gabrovšek</h1>*/}
            {/*        <h2 className="text-lg font-semibold">Full Stack Developer</h2>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*/!* Podatki *!/*/}
            {/*<div className="flex flex-col gap-2 text-xl">*/}
            {/*    <h2 className="font-semibold">Skills</h2>*/}
            {/*    <div className="flex flex-row flex-wrap gap-2">*/}
            {/*        {skills.map(skill => (*/}
            {/*            <div className="text-sm font-semibold  py-1.5 px-4 bg-gradient-to-br from-indigo-200 to-cyan-400 rounded-3xl">{skill}</div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}


            <div className="bg-[url(profile.png)] w-full h-full bg-contain bg-no-repeat bg-center"></div>

        </div>
    )

}