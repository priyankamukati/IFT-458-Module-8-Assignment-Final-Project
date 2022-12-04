/******************************************************************************************
Author: Priyanka Mukati
Date: 12/03/2022
Source code description: Controller for all the activities related to the users
*******************************************************************************************/
const User = require('./../model/userModel');
const APIFeatures = require('./../dataBaseManager/userDbContext');


exports.getAllUsers = async (req, res, next) => {
  try {
    const features = new APIFeatures(User.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
  const users = await User.find();
  res.status(200).render('allUserDetails', {
    title: `Get All Users`,
    status: 'success',
    results: users.length,
    data:users,
    user:req.user

  });
} catch (err) {
  res.status(404).render({
    status: 'fail',
    message: err
  });
}
};


exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).render('updateProfileAlert', {
      title: 'Update Profile',
      user:req.user

    });
  } catch (err) {
    res.status(404).render('editProfile',{
      status: 'fail',
      message: err,
      user: req.user
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {

      await User.findByIdAndDelete(req.body._id);

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

exports.getMyProfile = (req, res) => {
  res.status(200).render('Myprofile', {
    title: 'My Profile',
    user:req.user,
    dob: req.user.dateOfBirth
  });
};

exports.editMyProfile = (req, res) => {
  res.status(200).render('editprofile', {
    title: 'Edit My Profile',
    user: req.user,
    dob: req.user.dateOfBirth
  });
};


