import {Link} from "react-router-dom";
import Section from "./Section.tsx";


export default function Home() {
    return (
        <>
            <main className="p-8 flex flex-col gap-6 grow bg-[url('/bg.png')] justify-center bg-cover">
                <h1 className="text-center text-3xl font-bold text-white">Your Progress</h1>
                <Link to="/path" className=""><Section title="Education" subtitle="Lorem ipsum dolor sit amet"
                                                       progress={2} total={3} num={1}/></Link>
                <Link to="/path" className=""><Section title="Soft skills" subtitle="Lorem ipsum dolor sit amet"
                                                       progress={1} total={6} num={2}/></Link>
                <Link to="/path" className=""><Section title="Career" subtitle="Lorem ipsum dolor sit amet" progress={0}
                                                       total={4} num={3}/></Link>
                {/*<LoginButton />*/}
            </main>
        </>
    )
}
