const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name,email,password);
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User already exists, please login', success: false });
        }
        const userModel = new UserModel({ name, email, password });

        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201).json({
            message: "Signup successful",
            success: true
        });
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}


// sir israr 

// const signup = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     console.log(name, email, password);
//     const user = await UserModel.findOne({ email });
//     if (user) {
//       return res
//         .status(409)
//         .json({ message: "User already exists, please login", success: false });
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     let userModel;
//     try {
//       userModel = await UserModel.create({
//         name,
//         email,
//         password: hashedPassword,
//       });
//     } catch (err) {
//       return res
//         .status(400)
//         .json({ message: "Invalid Request", success: false });
//     }

//     res.status(201).json({
//       message: "Signup successful",
//       success: true,
//     });
//   } catch (err) {
//     console.error("Error during signup:", err);
//     res.status(500).json({
//       message: "Internal server error",
//       success: false,
//     });
//   }
// };

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Received login request for email:", email);
    const user = await UserModel.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res
        .status(403)
        .json({
          message: "Auth failed: email or password is wrong",
          success: false,
        });
    }
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      console.log("Password does not match");
      return res
        .status(403)
        .json({
          message: "Auth failed: email or password is wrong",
          success: false,
        });
    }
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.status(200).json({
      message: "Login successful",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

// Middleware to authenticate the user using JWT
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Get the token from the header
  if (!token) {
    return res.status(401).json({ message: "Authorization token is missing" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.userId = decoded._id; // Save user ID for later use
    next();
  });
};

// New API endpoint to get user information
const getUserInfo = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId).select("-password"); // Exclude password from the response
    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }
    res.status(200).json({ success: true, user });
  } catch (err) {
    console.error("Error retrieving user information:", err);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};



module.exports = {
  signup,
  login,
  getUserInfo,
};
