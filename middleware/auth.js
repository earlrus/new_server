const auth = (req, res, next) => {
  const { username } = req.body;
  if (username === "aman") {
    req.name = username;
    next();
  } else {
    return res.send("Not Authorize");
  }
};

module.exports = auth;
