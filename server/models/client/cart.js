let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let cartschema = {
    client: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    product: [{
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }]
}

let schema = new mongoose.Schema(cartschema);

module.exports = schema;
module.exports.cartschema = cartschema;
