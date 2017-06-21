import Config from '../configs/config'


class BaseService {
    apiGet(path, cb) {
        return fetch(Config.base_url + path, {
            accept: 'application/json'
        }).then(this.checkStatus)
            .then(this.parseJSON)
            .then(cb);
    }

    apiPost(path, body, cb) {
        return fetch(Config.base_url + path, {
            method: 'POST',
            body: this.getFormData(body)
        }).then(this.checkStatus)
            .then(this.parseJSON)
            .then(cb);
    }

    checkStatus = (response) => {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error); // eslint-disable-line no-console
        throw error;
    };

    parseJSON = (response) => {
        return response.json();
    };

    getFormData = (jsonData) => {
        var form = new FormData();
        for(var key in jsonData) {
            if(jsonData.hasOwnProperty(key)) {
                form.append(key, jsonData[key]);
            }
        }
        return form;
    }
}


export default BaseService;