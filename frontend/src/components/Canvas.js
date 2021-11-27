import React from 'react';
import {$points, $rField} from "../model/store";
import pointAPI from "../api/pointAPI";
import {combine} from "effector";

export class Canvas extends React.Component{

    componentDidMount() {
        const canvasGraph = document.getElementById('canvas');
        canvasGraph.addEventListener('click', function (event) {
            const x = (event.offsetX - 150) / 300 * 12;
            const y = (-event.offsetY + 150) / 300 * 12;
            pointAPI.checkPointFromCanvas(x, y);
        })
        const common = combine([$rField, $points]);
        common.watch(data => draw(data));
        pointAPI.getPoints();
    }

    render() {
        return(
            <canvas id={"canvas"} width={"300"} height={"300"}/>
        )
    }
}

function draw(data) {
    drawCanvas(data[0]);
    drawPoints(data[1]);
}

function drawCanvas(radius) {
    const canvasGraph = document.getElementById('canvas');
    const ctx = canvasGraph.getContext('2d');
    const canvasGraphWidth = canvasGraph.clientWidth;
    const canvasGraphHeight = canvasGraph.clientHeight;
    ctx.clearRect(0, 0, canvasGraphWidth, canvasGraphHeight);
    ctx.globalAlpha = 1;
    const xAxis = canvasGraphWidth / 2;
    const yAxis = canvasGraphHeight / 2;
    const xNameAxis = canvasGraphWidth / 12;
    const yNameAxis = canvasGraphHeight / 12;
    const offsetAxis = 5;
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.strokeStyle = '#000000';
    ctx.moveTo(xAxis, 0);
    ctx.lineTo(xAxis, canvasGraphHeight);
    ctx.moveTo(0, yAxis);
    ctx.lineTo(canvasGraphWidth, yAxis);
    ctx.stroke();
    ctx.closePath();

    let labels = ["5", "4", "3", "2", "1", " ", "-1", "-2", "-3", "-4", "-5"];
    ctx.font = '15px Arial';
    ctx.fillText("y", xAxis + offsetAxis, offsetAxis * 2);
    ctx.moveTo(xAxis - offsetAxis / 2, offsetAxis);
    ctx.lineTo(xAxis, 0);
    ctx.moveTo(xAxis + offsetAxis / 2, offsetAxis);
    ctx.lineTo(xAxis, 0);
    ctx.stroke();
    for (let i = 0; i < labels.length; i++) {
        ctx.moveTo(xAxis - offsetAxis / 2, yNameAxis + yNameAxis * i);
        ctx.lineTo(xAxis + offsetAxis / 2, yNameAxis + yNameAxis * i);
        ctx.stroke();
        ctx.fillText(labels[i], xAxis + offsetAxis, yNameAxis + yNameAxis * i + offsetAxis);
    }

    ctx.fillText("x", canvasGraphWidth - offsetAxis * 2, yAxis + 20);
    ctx.moveTo(canvasGraphWidth - offsetAxis, yAxis - offsetAxis / 2);
    ctx.lineTo(canvasGraphWidth, yAxis);
    ctx.moveTo(canvasGraphWidth - offsetAxis, yAxis + offsetAxis / 2);
    ctx.lineTo(canvasGraphWidth, yAxis);
    ctx.stroke();
    for (let i = 0; i < labels.length; i++) {
        ctx.moveTo(xNameAxis + xNameAxis * i, yAxis - offsetAxis / 2);
        ctx.lineTo(xNameAxis + xNameAxis * i, yAxis + offsetAxis / 2);
        ctx.stroke();
        ctx.fillText(labels[labels.length - i - 1], xNameAxis + xNameAxis * i - offsetAxis, yAxis + 20);
    }

    ctx.fillStyle = "#9933ff";
    ctx.globalAlpha = 0.4;
    ctx.fillRect(xAxis, yAxis, radius * xNameAxis, radius * yNameAxis);
    ctx.fillStyle = "#f53737";
    ctx.beginPath();
    ctx.moveTo(xAxis, yAxis);
    ctx.lineTo(xAxis, yAxis - radius * yNameAxis);
    ctx.lineTo(xAxis + radius * xNameAxis, yAxis);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(xAxis, yAxis);
    ctx.fillStyle = "#ef9308";
    ctx.arc(xAxis, yAxis, xAxis - (6 - radius) * xNameAxis, Math.PI, Math.PI * 1.5);
    ctx.fill();
    ctx.closePath();
}

function drawPoints(points) {
    if (points.length === 0) {
        return;
    }
    const canvasGraph = document.getElementById('canvas');
    const ctx = canvasGraph.getContext('2d');
    for (let i = 0; i < points.length; i++) {
        let x = points[i].x;
        let y = points[i].y;
        let hit = points[i].result;
        y = 150 - 300 * y / 12;
        x = 150 + 300 * x / 12;
        ctx.beginPath();
        ctx.moveTo(x, y);
        let color = "#fd3232";
        if (hit === true) {
            color = "#00ff0b";
        }
        ctx.fillStyle = color;
        ctx.globalAlpha = 1;
        ctx.arc(x, y, 2.2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}