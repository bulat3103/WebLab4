import React from "react";
import {Button} from "@yandex/ui/Button/desktop/bundle";
import {updateIsLogged} from "../model/events";
import pointAPI from "../api/pointAPI";
import {Text} from "@yandex/ui/Text";
import {useStore} from "effector-react";
import {$warnMainPageMessage} from "../model/store";

export const ManageButtons = () => {
    const warnMainPageMessage = useStore($warnMainPageMessage);

    const logout = () => {
        localStorage.removeItem("user");
        updateIsLogged(false);
    }
    return (
        <div>
            <div className={'buttons'}>
                <div className={'buttonManage'}>
                    <Button id='submitButton' view="raised" size="l" onClick={pointAPI.checkPoint}>Submit</Button>
                </div>
                <div className={'buttonManage'}>
                    <Button id='clearButton' view="raised" size="l" onClick={pointAPI.clearTable}>Clear</Button>
                </div>
                <div className={'buttonManage'}>
                    <Button id='exitButton' view="raised" size="l" onClick={logout}>Exit</Button>
                </div>
            </div>
            <div className={'warnMessage'}>
                <Text className={'warnMessageText'} color={'alert'}>{warnMainPageMessage}</Text>
            </div>
        </div>
    )
}