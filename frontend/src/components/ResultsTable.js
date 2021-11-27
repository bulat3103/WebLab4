import {Text} from "@yandex/ui/Text";
import React from "react";
import {useList} from "effector-react";
import {$points} from "../model/store";

export const ResultsTable = () => {

    return(
        <div id={"scroll"} className={"scroll_container"}>
            <table id={"resultTable"}>
                <thead>
                    <tr>
                        <th><Text className={"coords_col"} weight={"bold"}>X</Text></th>
                        <th><Text className={"coords_col"} weight={"bold"}>Y</Text></th>
                        <th><Text className={"coords_col"} weight={"bold"}>R</Text></th>
                        <th><Text className={"time_col"} weight={"bold"}>Time</Text></th>
                        <th><Text className={"hitres_col"} weight={"bold"}>Hit</Text></th>
                    </tr>
                </thead>
                <tbody>
                    {useList($points, ({x, y, r, time, result}, index) => (
                        <tr>
                            <td className={'xRes'}>{x}</td>
                            <td className={'yRes'}>{y}</td>
                            <td className={'rRes'}>{r}</td>
                            <td className={'timeRes'}>{time}</td>
                            <td className={'hit'}>{String(result)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}