const express=require('express');
const router=express.Router();
const UserModel=require('../model/userinfo');
const LoginModel=require('../model/login');


router.use(express.json());
router.use(express.urlencoded({ extended: true }));


router.post('/reg', async (req, res) => {
  const { uname, email, password, age, address } = req.body;
  if (!uname || !email || !password || !age || !address) {
    return res.status(404).json("You missed a required data");
  }
  try {
    const prevname = await UserModel.findOne({ uname: uname });
    const prevemail = await UserModel.findOne({ email: email });
    if (prevname) {
      return res.status(404).json("Username already exists");
    } else if (prevemail) {
      return res.status(404).json("This email is already registered");
    } else {
      const adduser = new UserModel({
        uname,
        email,
        password,
        age,
        address
      });
      await adduser.save();
      return res.status(200).json(adduser);
    }
  } catch (error) {
    return res.status(404).json(error);
  }
});

router.delete('/logout', async (req, res) => {
  try {
    await LoginModel.deleteMany({});
    res.json("Logged out")
  } catch (error) {
    res.status(404).json(error)
  }
})

router.post('/log', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json("You missed a required data");
  }
  else{
  try {
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json("Email not registered");
    }
    else if (user.password !== password) {
      return res.status(404).json("Incorrect password");
    }
    else{
      const loginModel = new LoginModel({
        uname: user.uname,
        email: user.email,
        password: user.password,
        age: user.age,
        address: user.address,
        UserType: user.UserType
      });
      await loginModel.save();
      return res.status(200).json(user);
    }
  } catch (error) {
    return res.status(404).json(error);
  }
}
});

router.get('/profile', async (req, res) => {
  try {
    const data = await LoginModel.find().exec();
    res.json(data);
  } catch (error) {
    res.status(404).json(error);
  }
});
router.get('/users', async (req, res) => {
  try {
    const data = await UserModel.find().exec();
    res.json(data);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.delete('/del/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await UserModel.findByIdAndDelete(id);
    res.json("Logged out")
  } catch (error) {
    res.status(404).json(error)
  }
})

module.exports = router;