/******************************************************************************************************8
Author: Priyanka Mukati
Date: 12/03/2022
Source code description: Controller for all the activities related to the overview of the apllication
********************************************************************************************************/
const User = require('./../model/userModel');
const APIFeatures = require('./../dataBaseManager/userDbContext');

exports.getLandingPAge = async (req, res) => {
  res.status(200).render('overview', {
    title: `Over View`
  
  });
};

exports.getSignInForm = (req, res) => {
  res.status(200).render('newUser', {
    title: 'Sign in New User'
  });
};

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

exports.getUserProfilePage = (req, res) => {
  res.status(200).render('userProfilePage', {
    title: 'Sign in New User'
  });
};

exports.getAboutUsForm = (req, res) => {
  res.status(200).render('aboutus', {
    title: 'About us'
  });
};
exports.getFAQForm = (req, res) => {
  res.status(200).render('FAQ', {
    title: 'About us'
  });
};




