const jwt = require("jsonwebtoken");
const { db } = require("../db/index.js");
const { users } = require("../db/schema.js");
const { eq } = require("drizzle-orm");

const auth = async (
  req,
  res,
  next
) => {
  try {
    const token = req.header("x-auth-token");

    if (!token) {
      res.status(401).json({ error: "No auth token, access denied!" });
      return;
    }

    const verified = jwt.verify(token, "passwordKey");

    if (!verified) {
      res.status(401).json({ error: "Token verification failed!" });
      return;
    }

    const verifiedToken = verified;

    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.id, verifiedToken.id));

    if (!user) {
      res.status(401).json({ error: "User not found!" });
      return;
    }

    req.user = verifiedToken.id;
    req.token = token;
    next();
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

module.exports = { auth };
