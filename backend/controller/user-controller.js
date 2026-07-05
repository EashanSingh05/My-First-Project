const userSchama = require('../models/user-schema');


export const createUser = async (req, res) => {
  try {
      const { name, email, password } = req.body;
  
      console.log(
        `Received Post Request with name: ${name}, email: ${email}, password: ${password}`
      );
  
      const user = await userSchema.create({
        name,
        email,
        password,
      });
  
      res.status(201).json(user);
  
    } catch (error) {
      console.log(error);
  
      res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
}

export const getUser = async (req, res) => {
  const totalUsers = await userSchema.find()
     res.json(totalUsers)
}

