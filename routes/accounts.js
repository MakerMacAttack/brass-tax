const { Router } = require('express')
const controllers = require('../controllers/accounts')

const router = Router()

router.get('/accounts', controllers.getAccounts)
router.get('/accounts/:id', controllers.getAccount)
router.post('/accounts', controllers.createAccount)
router.put('/accounts/:id', controllers.updateAccount)
router.delete('/accounts/:id', controllers.deleteAccount)

module.exports = router