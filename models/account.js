const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Account = new Schema(
  {
    label: { type: String, required: true },
    balance: { type: Number, required: true },
    interest: { type: mongoose.Decimal128, required: true }
    // look up how to hold a schema here so we can keep all the savings projects which are a part of this.
  },
  { timestamps: true }
)

module.exports = mongoose.model('accounts', Account)