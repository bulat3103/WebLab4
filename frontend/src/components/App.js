import React from "react";
import {WelcomePage} from "./WelcomePage";
import {MainPage} from "./MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const App = () => {

    return (
        <BrowserRouter>
            <div className={'App'}>
                <Routes>
                    <Route path={"/"} element={<WelcomePage/>}/>
                    <Route path={"/main"} element={<MainPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}