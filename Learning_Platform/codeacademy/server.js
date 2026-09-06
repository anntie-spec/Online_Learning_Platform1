// server.js — CodeAcademy app entry point.
// Serves the static frontend from /public and exposes a small JSON API
// for authentication (real accounts, backed by SQLite) plus read-only
// course/instructor data.

const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const { attachUser } = require('./middleware/auth');
const authRoutes = require('./routes/auth');
const courses = require('./data/courses');
const instructors = require('./data/instructors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(attachUser);

// ---- API ----
app.use('/api/auth', authRoutes);

app.get('/api/courses', (req, res) => {
  res.json({ courses });
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === req.params.id);
  if (!course) return res.status(404).json({ error: 'Course not found.' });
  res.json({ course });
});

app.get('/api/instructors', (req, res) => {
  res.json({ instructors });
});

app.get('/api/instructors/:id', (req, res) => {
  const instructor = instructors.find((i) => i.id === req.params.id);
  if (!instructor) return res.status(404).json({ error: 'Instructor not found.' });
  res.json({ instructor });
});

// ---- Static frontend ----
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`CodeAcademy running at http://localhost:${PORT}`);
});
