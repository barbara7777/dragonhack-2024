import {Link} from "react-router-dom";

export default function Article() {
    return (
        <div className="flex flex-col gap-2 grow">
            <img
                className="shadow-2xl"
                src="article_temp.png"/>

            <div className="flex flex-col grow gap-8 px-8 py-6">
                <h1 className="text-2xl font-extrabold">Let's make your CV great!</h1>
                <div className="grow flex flex-col gap-4 text-lg">
                    <p>This is the <span className="font-bold text-purple-700">single most important document</span> you
                        have to prepare
                        before applying to a job!</p>
                    <p>In your CV, you demonstrate to your <span
                        className="font-bold text-purple-700">target employer</span> your
                        most <span className="font-bold text-purple-700">relevant
                        skills and education.</span>
                    </p>
                    <p>Specfically, your employer will be looking at what they require for a specific position and try
                        to determine whether or not <span
                            className="font-bold text-purple-700">you are a good match!</span></p>
                    <p>Don't forget they will also be looking at your soft skills to make sure you fit in as a great
                        team mate!</p>
                    <p>So don't waste your chance and <span
                        className="font-bold text-purple-700">make your CV perfect!</span>
                    </p>
                </div>
                {/*    Action button */}
                <Link to="/cv" className="
                    text-xl font-bold text-purple-700
                    shadow-xl hover:shadow-2xl flex items-center justify-center
                    py-3 px-1
                    rounded-full
                    hover:cursor-pointer bg-white hover:bg-gray-50"
                >
                    <span className="
                    bg-gradient-to-r from-[#4367E8] via-[#A192FF] to-[#A46CEB]
                    text-transparent bg-clip-text
                     ">Make Your CV Rock!</span>
                </Link>
            </div>

        </div>
    )
}
