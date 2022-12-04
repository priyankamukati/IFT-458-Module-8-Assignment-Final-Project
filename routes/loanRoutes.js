/******************************************************************************************
Author: Priyanka Mukati
Date: 12/03/2022
Source code description: Routes for all the activities related to the Loans
*******************************************************************************************/

const express = require('express');
const loanController = require('../controllers/loanController');
const authHandlers = require('../controllers/authController');

const router = express.Router();


router.get('/viewAllloan', authHandlers.protect, loanController.getLoanDetailsForUser);
router.get('/viewAllLoans',authHandlers.protect,loanController.getAllLoans);
router.get('/newLoan', authHandlers.protect,loanController.getNewLoanForm);
router.post('/newLoan', authHandlers.protect, loanController.createNewLoan);
router.post('/deleteLoan', authHandlers.protect, loanController.deleteLoan);

module.exports = router;
