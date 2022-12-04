/******************************************************************************************
Author: Priyanka Mukati
Date: 12/03/2022
Source code description: Routes for all the activities related to the Users
*******************************************************************************************/

const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const authHandlers = require('../controllers/authController');

const router = express.Router();
router.post('/signup', authController.getSignInForm);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/viewAllUser', authHandlers.protect,userController.getAllUsers);
router.get('/Myprofile', authHandlers.protect, userController.getMyProfile);
router.get('/editProfile', authHandlers.protect, userController.editMyProfile);
router.post('/editProfile', authHandlers.protect, userController.updateUser);
router.post('/deleteProfile', authHandlers.protect, userController.deleteUser);


module.exports = router;
