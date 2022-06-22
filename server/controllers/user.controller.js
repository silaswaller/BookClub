const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

module.exports= {
    register: (req, res) => {

        const user = new User(req.body)

        user.save()
            .then((newUser) => {
                console.log(newUser);
                console.log("Successfully registered!")
                res.json({
                    successMessage: "Thank you for registering!",
                    user: newUser
                })
            })
            .catch((err) => {
                console.log("Registration not successfull")
                res.status(400).json(err)
            })

    },

    login: (req, res) => {
        User.findOne({email: req.body.email})
            .then((userRecord) => {
                if (userRecord === null) {
                    res.status(400).json({message: "Invalid Login Attempt"})
                } else {
                    bcrypt.compare(req.body.password, userRecord.password)
                        .then((isPasswordvalid) => {
                            if (isPasswordvalid) {
                                console.log("Password is valid");
                                res.cookie(
                                    "usertoken",
                                    jwt.sign(
                                        {
                                            id: userRecord._id,
                                            email: userRecord.email,
                                            username: userRecord.username,
                                        },
                                        process.env.JWT_SECRET
                                    ),
                                    {
                                        httpOnly: true,
                                        expires: new Date(Date.now( + 9000000))
                                    }
                                ).json({
                                    message: "Successfully Logged In",
                                    userLoggedIn: userRecord.username,
                                    userId: userRecord._id
                                });
                            } else {
                                res.status(400).json({message: "Invalid attempt"})
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                            res.status(400).json({message: "Invalid attempt"})
                        })
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({message: "Invalid attempt"})
            })
    },

    logout: (req, res) => {
        console.log("logging out");
        res.clearCookie("usertoken");
        res.json({message: "Successfully logged out"});
    },

    getLoggedInUser: (req, res) => {
        const decodedJWT = jwt.decode(req.cookies.usertoken, {
            complete: true
        })
        User.findOne({_id: decodedJWT.payload.id})
            .then((user) => {
                console.log(user);
                res.json(user)
            })
            .catch((err) => {
                console.log(err);
            })
    }
}