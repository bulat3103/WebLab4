import React from 'react';
import {$rField} from "../model/store";
import {useStore} from "effector-react";

export class Test extends React.Component{
    r = useStore($rField)
}