import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/user";

const router = express.Router();

interface ResponseType {
  status: Number;
  success: Boolean;
  error: Boolean;
  message: String | JSON | null;
}

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const foundUser = await User.findOne({ email: email });

    if (foundUser) {
      const response: ResponseType = {
        status: 400,
        success: true,
        error: false,
        message: "Go to Login",
      };

      return res.status(400).json(response);
    }

    // hashing the password
    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // signing JWT token
    const token = jwt.sign({ name, email }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    // storing user in the database
    const user = new User({ name, email, password: hashedPassword, token });
    const saverUser = await user.save();

    const response: ResponseType = {
      status: 201,
      success: true,
      error: false,
      message: saverUser.token,
    };

    res.status(201).json(response);
  } catch (error) {
    console.log(error);

    const response: ResponseType = {
      status: 500,
      success: false,
      error: true,
      message: "Something went wrong!",
    };

    return res.status(500).json(response);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (user && password) {
      const isValidPassword = await bcrypt.compare(
        password,
        String(user.password)
      );

      if (isValidPassword) {
        // signing JWT token
        const refreshedToken = jwt.sign(
          { name: user.name, email: user.email },
          process.env.JWT_SECRET!,
          {
            expiresIn: "7d",
          }
        );

        user.token = refreshedToken;
        await user.save();

        const response: ResponseType = {
          status: 200,
          success: true,
          error: false,
          message: refreshedToken,
        };

        return res.status(200).json(response);
      }

      const response: ResponseType = {
        status: 400,
        success: false,
        error: true,
        message: "Provide a valid password",
      };

      return res.status(400).json(response);
    }

    const response: ResponseType = {
      status: 404,
      success: false,
      error: true,
      message: "Please Sign up a new user.",
    };

    return res.status(404).json(response);
  } catch (error) {
    console.log(error);

    const response: ResponseType = {
      status: 500,
      success: false,
      error: true,
      message: "Something went wrong!",
    };

    return res.status(500).json(response);
  }
});

export default router;
