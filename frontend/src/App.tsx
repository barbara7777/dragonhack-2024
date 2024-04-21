import './App.css'
import {NavLink, Outlet} from "react-router-dom";

import LogoHouse from './assets/1-house.svg'
import LogoDoc from './assets/2-doc.svg'
import LogoPerson from './assets/3-person.svg'
import LogoBriefcase from './assets/4-briefcase.svg'

function FooterIcon({empty, icon}) {
    return (
        <div
            className="select-none rounded-xl p-[3px] w-12 h-12  bg-gradient-to-b from-[#4367E8] via-[#A192FF] to-[#A46CEB]">
            <div data-isEmpty={!empty}
                 className="data-[isEmpty=true]:bg-gray-100 w-full h-full rounded-lg flex justify-center items-center">
                <img src={icon} data-isEmpty={!empty}
                     className="w-7 h-7 data-[isEmpty=false]:grayscale data-[isEmpty=false]:brightness-200" alt="logo"/>
            </div>
        </div>
    )
}


function Footer() {
    const sections = [
        {title: "Home", link: "/", icon: LogoHouse},
        {title: "", link: "/cv", icon: LogoDoc},
        {title: "", link: "/career", icon: LogoBriefcase},
        {title: "Profil", link: "/profile", icon: LogoPerson}
    ]

    return (
        <footer className="
        h-20 p-8
        justify-center
        flex flex-row flex-none gap-[25px]
        border-t-2 border-t-gray-200
        content-center items-center ">

            {sections.map(section => (
                <NavLink to={section.link}>
                    {({isActive}) => (
                        <FooterIcon empty={!isActive} icon={section.icon}/>
                    )}
                </NavLink>
            ))}
        </footer>
    )

}


function App() {
    return (
        <>
            <div className="select-none h-screen max-h-screen w-screen flex flex-row justify-center bg-gray-100">
                <div className="h-screen max-h-screen w-[550px] border-x-2 border-x-gray-300 flex flex-col bg-gray-50">

                    <Outlet/>

                    <Footer/>
                </div>
            </div>

        </>
    )
}

export default App
