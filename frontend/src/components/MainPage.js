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
            <table id={"mainTable"}>
                <tbody>
                <tr>
                    <td className={'content'} id={'values'}>
                        <div className={'plate_top'}>
                            <Text color={"inverse"} weight={"bold"}>Values</Text>
                        </div>
                        <Form/>
                        <ManageButtons/>
                    </td>
                    <td className={'content'} id={'graph'} rowSpan={'1'}>
                        <div className={'plate_top'}>
                            <Text color={"inverse"} weight={"bold"}>Graph</Text>
                        </div>
                        <div className={'graph_image'}>
                            <Canvas/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className={"contentTable"} id={"table"} colSpan={"2"}>
                        <div className={'plate_top_table'}>
                            <Text color={"inverse"} weight={"bold"}>Table</Text>
                        </div>
                        <ResultsTable/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}