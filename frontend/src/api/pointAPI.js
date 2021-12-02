import axios from 'axios';
import {resetPoints, updatePoints, updateWarnMainPageMessage} from "../model/events";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9090/points'
});

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const pointAPI = {
    async getPoints() {
        let token = localStorage.getItem('user');
        return axiosInstance.get('', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(response => {
            if (response.status === 200) {
                for (let i = 0; i < response.data.length; i++) updatePoints(response.data[i]);
            }
        })
    },

    async updatePoints(r) {
        let token = localStorage.getItem('user');
        return axiosInstance.post('/update', {r}, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(response => {
            if (response.status === 200) {
                resetPoints();
                for (let i = 0; i < response.data.length; i++) {
                    updatePoints(response.data[i]);
                }
            }
        })
    },

    async checkPointFromCanvas(x, y) {
        x = String(Math.floor(x * 100) / 100);
        y = String(Math.floor(y * 100) / 100);
        let r = document.getElementsByClassName('Button2-Text')[1].innerHTML;
        let token = localStorage.getItem('user');
        return axiosInstance.post('', {x, y, r}, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(response => {
            if (response.status === 200) {
                updatePoints(response.data);
            } else {
                alert("Непредвиденный ответ " + response.status + " от сервера!");
            }
        })
    },

    async checkPoint() {
        updateWarnMainPageMessage('');
        let x = document.getElementsByClassName('Button2-Text')[0].innerHTML;
        let y = document.getElementById('y_input').value.replace(',', '.');
        let r = document.getElementsByClassName('Button2-Text')[1].innerHTML;
        let token = localStorage.getItem('user');
        if (y == null || y === '') {
            updateWarnMainPageMessage('Please, write Y value!');
        } else if (!isNumeric(y)) {
            updateWarnMainPageMessage('Y must be a double value!');
        } else if (y <= -3 || y >= 3) {
            updateWarnMainPageMessage('Y must be in range (-3;3)');
        } else {
            return axiosInstance.post('', {x, y, r}, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(response => {
                if (response.status === 200) {
                    updatePoints(response.data);
                } else {
                    alert("Непредвиденный ответ " + response.status + " от сервера!");
                }
            })
        }
    },

    async clearTable() {
        let token = localStorage.getItem('user');
        return axiosInstance.delete('', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(response => {
            if (response.status === 200) {
                resetPoints();
            }
        })
    }
}

export default pointAPI;