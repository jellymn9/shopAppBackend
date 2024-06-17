//const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserService = require("../services/users.js");

class UserController {
  userService = new UserService();

  registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      //console.log("hashedPassword: ", hashedPassword);
      const user = await this.userService.createUser(
        username,
        hashedPassword,
        email
      );

      res.status(200).send({ user });
    } catch (e) {
      res.status(400).send(e?.message); //422 status code could work too
    }
  };

  loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
      const user = await this.userService.getUser(username);
      const hashedPassword = user.password;
      const isPasswordMatch = await bcrypt.compare(password, hashedPassword);
      if (!isPasswordMatch) {
        throw new Error("Authentication failed!");
      }
      const token = jwt.sign(
        {
          userId: user.id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.send({ token });
    } catch (e) {
      res.status(401).send(e?.message); //check out status code
    }
  };
}

module.exports = UserController;
