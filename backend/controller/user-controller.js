const userSchema = require('../schema/user-schema');
const argon2 = require('argon2')

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await argon2.hash(password)

    const user = await userSchema.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json(user);
    
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const totalUsers = await userSchema.find();

    res.json(totalUsers);

  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};


const updatePassword = async (req, res) => {
  try {
    const { email, password, newPassword } = req.body;

    const user = await userSchema.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "No user found with this email."
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        message: "Password didn't match"
      });
    }

    user.password = newPassword;
    await user.save();

    return res.status(200).json({
      message: "Password updated successfully"
    });

  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message
    });
  }
};


module.exports = {
  createUser,
  getUser,
  updatePassword,
};