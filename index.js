const axios = require('axios');

const MediumRequester = {
    baseUrl: 'https://medium.com/',
    getUser: function (username) {
        return axios.get(`${this.baseUrl}@${username}?format=json`)
            .then((res) => {
                const responseObject = this._removePrependedString(res.data);
                return responseObject.payload;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    getUserPost: function (username, id) {
        return axios.get(`${this.baseUrl}@${username}/${id}?format=json`)
            .then((res) => {
                const responseObject = this._removePrependedString(res.data);
                return responseObject.payload;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    _removePrependedString: function (dataString) {
        const responsePrependedString = '])}while(1);</x>';
        return JSON.parse(dataString.replace(responsePrependedString, ''));
    }
}


MediumRequester.getUser('lukethedev');
MediumRequester.getUserPost('lukethedev', '934a7a8778f9');

module.exports = Object.create(MediumRequester);
