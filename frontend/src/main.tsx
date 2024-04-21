import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Auth0Provider} from "@auth0/auth0-react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Article from "./Article.tsx";
import Home from "./Home.tsx";
import SkillPath from "./SkillPath.tsx";
import Profile from "./Profile.tsx";
import Intro1 from "./Intro1.tsx";
import Intro2 from "./Intro2.tsx";
import Intro3 from "./Intro3.tsx";
import Intro4 from "./Intro4.tsx";
import Intro5 from "./Intro5.tsx";
import CV from "./CV.tsx";
import Career from "./Career.tsx";
import Intro6 from "./Intro6.tsx";


// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         children: [
//             {
//                 path: "",
//                 element: <Home />
//             },
//             {
//                 path: "task",
//                 element: <Article />
//             },
//         ]
//     }
// ]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Auth0Provider
        domain="dev-wwe8t6xg5rwq2vk8.eu.auth0.com"
        clientId="YFvXSLfwEkrWSJ79ftqlyWZIAEyYXqID"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <BrowserRouter>
            <Routes>
                <Route path="/intro" element={<Intro1/>}/>
                <Route path="/intro2" element={<Intro2/>}/>
                <Route path="/intro3" element={<Intro3/>}/>
                <Route path="/intro4" element={<Intro4/>}/>
                <Route path="/intro5" element={<Intro5/>}/>
                <Route path="/intro6" element={<Intro6/>}/>

                <Route path="/" element={<App/>}>
                    <Route path="" element={<Home/>}/>
                    <Route path="task" element={<Article/>}/>
                    <Route path="path" element={<SkillPath/>}/>
                    <Route path="cv" element={<CV/>}/>
                    <Route path="career" element={<Career/>}/>
                    <Route path="profile" element={<Profile/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </Auth0Provider>
)
