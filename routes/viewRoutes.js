/******************************************************************************************
Author: Priyanka Mukati
Date: 12/03/2022
Source code description: Routes for all the activities related to the overview page
*******************************************************************************************/

const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getLandingPAge);
router.get('/aboutus', viewsController.getAboutUsForm);
router.get('/signup', viewsController.getSignInForm);
router.get('/login', viewsController.getLoginForm);
router.get('/userProfile', viewsController.getUserProfilePage);
router.get('/faq', viewsController.getFAQForm);





module.exports = router;
