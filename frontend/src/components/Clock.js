import React from "react";
import {Text} from "@yandex/ui/Text";

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return(
            <div className={'clock'}>
                <Text id={'dateItem'} maxLines={1}>{this.state.date.toLocaleDateString()}</Text><br/>
                <Text id={'timeItem'} maxLines={1}>{this.state.date.toLocaleTimeString()}</Text>
            </div>
        )
    }
}