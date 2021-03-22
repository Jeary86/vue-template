import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.defaults.withCredentials = true;

export default class Server {
    static async callApi (apiName, data) {
        const result = await axios(
            {
                url: process.env.VUE_APP_CHAT_URL + apiName,
                data: data,
                responseType : 'json',
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })

        return result.data;
    }

    static async getWatchCallApi (apiName,data) {
        const result = await axios({
            url: process.env.VUE_APP_WATCH_URL + apiName,
            method: 'get',
            params : data,
        })

        return result;
    }

    static async getCallApi (apiName,data) {
        const result = await axios({
                url: process.env.VUE_APP_CHAT_URL + apiName,
                method: 'get',
                params : data,
            })

        return result;
    }
}
