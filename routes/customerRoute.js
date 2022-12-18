const express = require('express');
const router = express.Router();
const customer = require('../controllers/customerController');


router.get('/',customer.getAll);
router.get('/:id', customer.getById);
router.put('/:id', customer.updatePass);
router.delete('/:id', customer.delById);

module.exports = router;