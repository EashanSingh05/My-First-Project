const adminSchema = require('../schema/admin-schema');
const argon2 = require('argon2');
const { generateToken } = require('../util');


const createAdmin = async(req,res)=> {
    const {name,email,password} = req.body
    try {
        const hashedPassword = await argon2.hash(password)

        const user = await adminSchema.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json(user);
    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: 'Something is wrong',
            error: error.message,
        });
    }
}
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await adminSchema.findOne({ email });
    
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

    console.log(user)

  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message
    });
  }
};

module.exports = {
    createAdmin,
    loginAdmin
}