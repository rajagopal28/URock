import BaseService from './BaseService'

class UserService extends BaseService {
    getUsers = (cb) => {
        return super.apiGet('/users/all', cb);
    };

    getUserPayments = (userId, cb) => {
        return super.apiGet('/v2/payments/all?userId=' + userId, cb);
    };
    getCumulativeRewards = (cb) => {
        return super.apiGet('/v2/user-rewards/cumulative', cb);
    }

}


export default UserService;