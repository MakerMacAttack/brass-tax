const db = require('../db/connection')
const Account = require('../models/account')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const accounts = 
    [
        {
          "name": "Doms mancave fund",
          "balance": 4.76,
          "interest": .03
        }
      ]

    await Account.insertMany(accounts)
    console.log("Created accounts!")
}
const run = async () => {
    await main()
    db.close()
}

run()
