const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Account = new Schema(
  {
    balance: { type: Number, required: true },
    interest: { type: Decimal128, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('accounts', Account)