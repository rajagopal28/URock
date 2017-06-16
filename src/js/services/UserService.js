class UserService {
    getUsers = (cb) => {
        return fetch('http://gamifier-dextrous.rhcloud.com/api/users/all', {
            accept: 'application/json'
        }).then(this.checkStatus)
            .then(this.parseJSON)
            .then(cb);
    };

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
}


export default UserService;