import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    //from frontend , when login id and pass filled
    let token = req.header("Authorization");

    //if there is no token
    if (!token) {
      return res.status(403).send("Access Denied");
    }

    // start with bearer string
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    //if there is  token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
