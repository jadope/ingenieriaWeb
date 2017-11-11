let mongoose = require('mongoose');
let _ = require('underscore');
let config = require('../config/settings');

module.exports = function(wagner) {
  mongoose.connect(config.database);

  let Product = mongoose.model('Product', require('./seller/product'), 'products');
  let User = mongoose.model('User', require('./shared/user'), 'users');
  let Report= mongoose.model('Report', require('./shared/report'), 'reports');
  let Cart = mongoose.model('Cart', require('./client/cart'), 'carts');
  let Coupon= mongoose.model('Coupon', require('./seller/coupons'), 'coupons');
  let Account = mongoose.model('Account', require('./bank/debit_account'), 'accounts');
  let Record = mongoose.model('Record',require('./bank/record'),'records');
  let Bank_worker = mongoose.model('Bank_worker',require('./bank/user'),'bank_workers');

  let models = {
    Product: Product,
    User: User,
    Cart: Cart,
    Coupon: Coupon,
    Report: Report,
    Account: Account,
    Record: Record,
    Bank_worker: Bank_worker
  };

  _.each(models, function (value, key) {
        wagner.factory(key, function() {
            return value
        })
    });

    return models;
};
