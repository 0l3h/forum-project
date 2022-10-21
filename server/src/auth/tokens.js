const jwt = require('jsonwebtoken');

const sign = payload => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1h' });
};

const refresh = token => {
  const payload = jwt.verify(token, process.env.TOKEN_SECRET);

  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1h' });
};

module.exports = { sign, refresh };