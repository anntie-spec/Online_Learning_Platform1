# CodeAcademy

A learning-platform website built from your Figma design: Home, Instructors
(list + detail), Courses (list + detail), Signup, and Login — backed by a
real Node.js + Express server with signup/login accounts stored in SQLite.

## What's real vs. static

- **Signup / Login**: fully functional. Passwords are hashed with bcrypt
  before being stored; a signed JWT is set as an httpOnly cookie on
  success, so a visitor stays logged in across pages/refreshes.
- **Courses & Instructors**: served from the backend (`/api/courses`,
  `/api/instructors`) so the frontend never hardcodes this data, but the
  data itself lives in plain JS files (`data/courses.js`,
  `data/instructors.js`) rather than a database table — easy to swap for a
  DB later without touching the frontend.

## Requirements

- [Node.js](https://nodejs.org) 18 or newer (v22 recommended)
- Internet access the first time, to download dependencies

## Setup

```bash
cd codeacademy
npm install
npm start
```

Then open **http://localhost:3000** in your browser.

The first run creates a `data.sqlite` file in the project folder — that's
your database. It's created automatically; you don't need to set anything
up.

To run with auto-restart while you edit files:

```bash
npm run dev
```

## Project structure

```
codeacademy/
├── server.js            # Express app entry point
├── db.js                # SQLite connection + schema
├── middleware/auth.js    # JWT cookie verification
├── routes/auth.js        # /api/auth/signup, /login, /logout, /me
├── data/
│   ├── courses.js        # Course catalog
│   └── instructors.js    # Instructor roster
└── public/                # Frontend (served as static files)
    ├── index.html         # Home
    ├── instructors.html    # Instructor list
    ├── instructor.html     # Instructor detail (?id=...)
    ├── courses.html         # Course list
    ├── course.html          # Course detail (?id=...)
    ├── signup.html
    ├── login.html
    ├── css/style.css
    └── js/
        ├── main.js         # Nav login-state on every page
        ├── auth.js         # Signup/login form handling
        ├── courses.js      # Course grid + detail rendering
        └── instructors.js  # Instructor grid + detail rendering
```

## Notes & things you may want to change

- **JWT secret**: for real deployment, set an environment variable
  `JWT_SECRET` to a long random string instead of relying on the
  development default in `middleware/auth.js`.
- **Images**: instructor photos are generated initial-avatars (via
  ui-avatars.com) rather than stock photos, since the design used real
  people's photos as placeholders — swap in your own team photos by
  editing `data/instructors.js`. Hero/feature images on the home page
  pull from Unsplash; replace the URLs in `public/index.html` with your
  own assets if you'd like.
- **Fonts**: Sora (headings) and Inter (body) load from Google Fonts —
  needs internet to display correctly; swap the `<link>` tags in each
  HTML file if you'd prefer to self-host fonts.
- **Contact page**: your Figma design included a Contact page that wasn't
  part of this build — happy to add it if you want it wired up too.
