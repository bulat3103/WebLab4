import React from "react";
import {Header} from "./Header";
import {Form} from "./Form";
import {Text} from "@yandex/ui/Text";
import {ManageButtons} from "./ManageButtons";
import {ResultsTable} from "./ResultsTable";
import {Canvas} from "./Canvas";
import {Navigate} from "react-router-dom";
import {useStore} from "effector-react";
import {$isLogged} from "../model/store";

export const MainPage = () => {
    const isLogged = useStore($isLogged);

    return (
        <div>
            {!isLogged && <Navigate to={"/"}/>}
            <Header/>
            <div id={"mainTable"}>
                <div id={'firstRow'}>
                    <div className={'content'} id={'values'}>
                        <div className={'plate_top'}>
                            <Text color={"inverse"} weight={"bold"} className={'plate_top_title'}>Values</Text>
                        </div>
                        <Form/>
                        <ManageButtons/>
                    </div>
                    <div className={'content'} id={'graph'}>
                        <div className={'plate_top'}>
                            <Text color={"inverse"} weight={"bold"} className={'plate_top_title'}>Graph</Text>
                        </div>
                        <div className={'graph_image'}>
                            <Canvas/>
                        </div>
                    </div>
                </div>
                <div className={"contentTable"} id={"table"}>
                    <div className={'plate_top_table'}>
                        <Text color={"inverse"} weight={"bold"} className={'plate_top_title'}>Table</Text>
                    </div>
                    <ResultsTable/>
                </div>
            </div>
        </div>
    )
}