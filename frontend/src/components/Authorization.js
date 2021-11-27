import React from 'react'
import {Textinput} from '@yandex/ui/Textinput/desktop/bundle'
import {useStore} from "effector-react";
import {Button} from "@yandex/ui/Button/desktop/bundle";
import {$passwordField, $usernameField, $warnMessage} from "../model/store";
import {updatePassword, updateUsername} from "../model/events";
import authAPI from "../api/authAPI";
import {Text} from "@yandex/ui/Text";

export const Authorization = () => {
    const username = useStore($usernameField);
    const password = useStore($passwordField);
    const warnMessage = useStore($warnMessage);

    return (
        <div className={'authorization'}>
            <form>
                <div id={'inputAuthorizationBlock'}>
                    <Textinput id='loginInput' value={username} onChange={e => updateUsername(e.target.value)}
                               view='default' size="m" placeholder={'Enter username...'}/>
                    <Textinput id='passwordInput' value={password} onChange={e => updatePassword(e.target.value)}
                               type='password' view='default' size="m" placeholder={'Enter password...'}/>
                </div>
                <div id={'authorizationButtons'}>
                    <Button id='signInButton' view="raised" size="l" onClick={authAPI.login}>Sign in</Button>
                    <Button id='signUpButton' view="raised" size="l" onClick={authAPI.register}>Sign up</Button>
                </div>
                <div className={'warnMessage'}>
                    <Text className={'warnMessageText'} color={'alert'}>{warnMessage}</Text>
                </div>
            </form>
        </div>
    )
}