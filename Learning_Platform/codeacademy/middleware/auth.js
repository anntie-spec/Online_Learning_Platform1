// middleware/auth.js — reads the "token" cookie, verifies it, and
// attaches the decoded user info to req.user. Never blocks the request
// on its own (pages are public) — routes decide what to do with req.user.

const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

function attachUser(req, res, next) {
  const token = req.cookies && req.cookies.token;
  req.user = null;
  if (token) {
    try {
      req.user = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      req.user = null;
    }
  }
  next();
}

// Use on API routes that require a signed-in user.
function requireAuth(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ error: 'Please log in to continue.' });
  }
  next();
}

module.exports = { attachUser, requireAuth, JWT_SECRET };
