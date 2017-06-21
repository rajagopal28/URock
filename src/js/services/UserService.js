import BaseService from './BaseService'

class UserService extends BaseService {
    getUsers = (cb) => {
        return super.apiGet('/users/all', cb);
    };

    getUserPayments = (userId, cb) => {
        return super.apiGet('/v2/payments/all?userId=' + userId, cb);
    };
    getCumulativeRewards = (category, cb) => {
        return super.apiGet('/v2/user-rewards/cumulative?category=' + category, cb);
    };
    getPromotions = (cb) => {
        return super.apiGet('/v2/promotions/all', cb);
    };

    getCategories = (cb) => {
        return super.apiGet('/v2/categories', cb);
    };

    addPayment = (data, cb) => {
        return super.apiPost('/v2/payments/add', data, cb);
    };

}


export default UserService;