import React from "react";
import {Text} from "@yandex/ui/Text";

export class Header extends React.Component {
    render() {
        return(
            <div className={'header'}>
                <Text weight={"bold"} color={"inverse"} className={'leftItem'} maxLines={1}>Khafizov Bulat Lenarovich (P3213)</Text>
                <Text weight={"bold"} color={"inverse"} className={'rightItem'} maxLines={1}>№566</Text>
            </div>
        )
    }
}