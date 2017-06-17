import BaseService from './BaseService'

class UserService extends BaseService {
    getUsers = (cb) => {
        return super.apiGet('/api/users/all', cb);
    };

}


export default UserService;