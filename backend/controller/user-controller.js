const userSchema = require('../schema/user-schema');
const argon2 = require('argon2');
const { verifyToken , generateToken } = require('../util');




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
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userSchema.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "No user found with this email."
      });
    }

    const isPasswordValid = await argon2.verify(user.password, password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Password didn't match"
      });
    }

    const token = generateToken(user);

    return res.status(200).json({
      message: "Login successful",
      token
    });

  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message
    });
  }
};

const uploadProfilePicture = async (req, res) => {
  try {
    const { email, profilePicture,token } = req.body;

     const decodedToken = verifyToken(token);
    if (decodedToken.email !== email) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }


    const user = await userSchema.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "No user found with this email."
      });
    }
   
    user.profilePicture = profilePicture;
    await user.save();

    return res.status(200).json({
      message: "Profile picture updated successfully"
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
  loginUser,
  uploadProfilePicture
};