import {Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();

    return <button
        className="text-2xl shadow-xl hover:shadow-2xl  w-full  font-bold text-white  py-4 px-12 rounded-full hover:cursor-pointer border-2 border-white"
        onClick={() => loginWithRedirect()}><span
        className="">Login with Auth0</span>
    </button>;
};

export default function Intro1() {
    return (
        <>
            <div className="h-screen max-h-screen w-screen flex flex-row justify-center bg-gray-100">
                <div
                    className="h-screen max-h-screen w-[550px] border-x-2 border-x-gray-300  bg-[url(intro1-bg.png)] bg-cover gap-4 flex flex-col bg-gray-50 items-center justify-center">

                    <div className="h-80 w-80 bg-[url(logo.png)] bg-cover drop-shadow-2xl hover:animate-spin"></div>

                    <div className="flex flex-col gap-4">

                        <Link to="/intro2"
                              className="text-2xl mt-6 shadow-xl hover:shadow-2xl   border-2 border-white font-bold text-purple-700  py-4 px-12 rounded-full hover:cursor-pointer bg-white hover:bg-gray-100">
                        <span
                            className="bg-gradient-to-r from-[#4367E8] via-[#A192FF] to-[#A46CEB] text-transparent bg-clip-text">Create your account</span>
                        </Link>

                        <LoginButton />

                    </div>

                </div>
            </div>

        </>
    )


}