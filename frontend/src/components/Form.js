import React from "react";
import {Text} from "@yandex/ui/Text";
import {Select} from "@yandex/ui/Select/desktop/bundle";
import {Textinput} from "@yandex/ui/Textinput/desktop/bundle";
import {useStore} from "effector-react";
import {$rField, $xField, $yField} from "../model/store";
import {updateR, updateX, updateY} from "../model/events";

export const Form = () => {
    const xField = useStore($xField);
    const yField = useStore($yField);
    const rField = useStore($rField);

    return(
        <form>
            <table id={'input'}>
                <tbody>
                <tr>
                    <td className={'input_label'}>
                        <Text weight={"bold"}>X</Text>
                    </td>
                    <td className={'input_value'}>
                        <Select
                            id={'x_input'}
                            size={'m'}
                            view={'default'}
                            theme={'normal'}
                            onChange={e => updateX(e.target.value)}
                            value={xField}
                            options={[
                                {value: "-5", content: "-5"},
                                {value: "-4", content: "-4"},
                                {value: "-3", content: "-3"},
                                {value: "-2", content: "-2"},
                                {value: "-1", content: "-1"},
                                {value: "0", content: "0"},
                                {value: "1", content: "1"},
                                {value: "2", content: "2"},
                                {value: "3", content: "3"}]}/>
                    </td>
                </tr>
                <tr>
                    <td className={'input_label'}>
                        <Text weight={"bold"}>Y</Text>
                    </td>
                    <td className={'input_value'}>
                        <div>
                            <Textinput id={'y_input'} value={yField} view='default' size="m" onChange={e => updateY(e.target.value)} placeholder={'Number from -3 to 3...'}/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className={'input_label'}>
                        <Text weight={"bold"}>R</Text>
                    </td>
                    <td className={'input_value'}>
                        <Select
                            id={'r_input'}
                            size={'m'}
                            view={'default'}
                            theme={'normal'}
                            onChange={e => updateR(e.target.value)}
                            value={rField}
                            options={[
                                {value: "1", content: "1"},
                                {value: "2", content: "2"},
                                {value: "3", content: "3"},
                                {value: "4", content: "4"},
                                {value: "5", content: "5"}]}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    )
}