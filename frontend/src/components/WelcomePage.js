import React from "react";
import {Header} from "./Header";
import {Clock} from "./Clock";
import {Authorization} from "./Authorization";
import {Navigate} from "react-router-dom";
import {$isLogged} from "../model/store";
import {useStore} from "effector-react";

export const WelcomePage = () => {
    const isLogged = useStore($isLogged);

    return (
        <div>
            {isLogged && <Navigate to={"/main"}/>}
            <Header/>
            <Clock/>
            <Authorization/>
        </div>
    )
}