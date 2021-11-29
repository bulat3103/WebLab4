import {createStore} from "effector";
import {
    resetPoints,
    updateIsLogged,
    updatePassword, updatePoints,
    updateR,
    updateUsername,
    updateWarnMainPageMessage,
    updateWarnMessage,
    updateX,
    updateY
} from "./events";

export const $usernameField = createStore("");
export const $passwordField = createStore("");

export const $isLogged = createStore(localStorage.getItem('user') != null);

export const $warnMessage = createStore('');
export const $warnMainPageMessage = createStore('');

export const $xField = createStore("0");
export const $yField = createStore("");
export const $rField = createStore("5");

export const $points = createStore([]);

$isLogged.on(updateIsLogged, (state, data) => data);

$usernameField.on(updateUsername, (state, data) => data);
$passwordField.on(updatePassword, (state, data) => data);

$warnMessage.on(updateWarnMessage, (state, data) => data);
$warnMainPageMessage.on(updateWarnMainPageMessage, (state, data) => data);

$xField.on(updateX, (state, data) => data);
$yField.on(updateY, (state, data) => data);
$rField.on(updateR, (state, data) => data);

$points.on(updatePoints, (state, data) => [...state, data]);
$points.reset(resetPoints);
