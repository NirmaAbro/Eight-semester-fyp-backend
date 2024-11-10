const jwt = require("jsonwebtoken");
const ensureAuthenticated = (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT token is require" });
  }
  try {
    const decoded = jwt.verify(auth, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT token wrong or expired" });
  }
};

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

module.exports={
    authenticate,
    ensureAuthenticated
}
