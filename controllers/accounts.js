const Account = require('../models/account')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getAccounts = async (req, res) => {
    try {
        const accounts = await Account.find()
        res.json(accounts)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getAccount = async (req, res) => {
    try {
        const { id } = req.params
        const account = await Account.findById(id)
        if (account) {
            return res.json(account)
        }
        res.status(404).json({ message: 'Account not found!' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createAccount = async (req, res) => {
    try {
        const account = await new Account(req.body)
        await account.save()
        res.status(201).json(account)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

const updateAccount = async (req, res) => {
    const { id } = req.params
    await Account.findByIdAndUpdate(id, req.body, { new: true }, (error, account) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!account) {
            return res.status(404).json({ message: 'Account not found!' })
        }
        res.status(200).json(account)
    })
}

const deleteAccount = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Account.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Account deleted")
        }
        throw new Error("Account not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createAccount,
    getAccounts,
    getAccount,
    updateAccount,
    deleteAccount
}