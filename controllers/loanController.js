/******************************************************************************************
Author: Priyanka Mukati
Date: 12/03/2022
Source code description: Controller for all the activities related to the Loans
*******************************************************************************************/
const Loan = require('./../model/loanModel');
const APIFeatures = require('./../dataBaseManager/loanDbContext');
const User = require('../model/userModel');

exports.getAllLoans = async (req, res) => {

  try {

    const features = new APIFeatures(Loan.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const loans = await features.query;
    res.status(200).render('AllLoans', {
      title: `Get All Loans`,
      status: 'success',
      results: loans.length,
      data: loans,
      user: req.user
    });
  } catch (err) {
    res.status(404).render({
      status: 'fail',
      message: err
    });
  }
};  

exports.getLoanDetailsForUser = async (req, res) => {
  try {
    const loans = await Loan.find({ 'userID': req.user._id });
    res.status(200).render('loans', {
      title: `Get Loans`,
      status: 'success',
      results: loans.length,
      data: loans,
      user: req.user
    });
  } catch (err) {
    res.status(404).render({
      status: 'fail',
      message: err
    });
  }
};

exports.getNewLoanForm = async (req, res) => {
  res.status(200).render('newLoan', {
    title: `Create New Loan`,
    user: req.user
  });
};


exports.createNewLoan = async (req, res, next) => {
  try {
    const amountInFloat=parseFloat(req.body.loanamount)
    const interestAccumulated= amountInFloat * parseFloat(req.body.loantermyears) * parseFloat(req.body.interest) / 100
    const amountOwed = amountInFloat + interestAccumulated  
    const newloan = await Loan.create({
      userID: req.user._id,
      customerName: req.user.firstName + ' ' + req.user.lastName,
      phoneNumber: req.user.phoneNumber,
      address: req.user.address,
      loanNumber: Math.floor(Math.random() * 1001),
      loanType: req.body.loantype,
      loanAmount: req.body.loanamount,
      interest: req.body.interest,
      loanTermYears: req.body.loantermyears,
      description: req.body.description,
      startDate: req.body.startdate,
      totalPaymentWithInterest:amountOwed

    });
    res.status(200).render('userProfilePage', {
      title: `Create New Loan`,
      loancreated:newloan,
      user:req.user

    });
  } catch (err) {
    res.status(404).render('newLoan',{
      status: 'fail',
      message: err,
      user: req.user
    });
  }
};

exports.getMyProfile = (req, res) => {
  res.status(200).render('Myprofile', {
    title: 'My Profile',
    user: req.user
  });
};  

exports.deleteLoan = async (req, res) => {
  try {

      await Loan.findByIdAndDelete(req.body._id);

    res.status(200).render('userProfilePageWithAlert', {
      title: 'Update Profile',
      user:req.user

    });
  } catch (err) {
    res.status(404).render({
      status: 'fail',
      message: err,
      user: req.user
    });
  }
};



  