// data/courses.js — course catalog. Static for now; swap for a DB
// table later without changing any frontend code, since the frontend
// only talks to /api/courses.

module.exports = [
  {
    id: 'html5',
    name: 'HTML & CSS Modules',
    tag: 'HTML5',
    level: 'Beginner',
    duration: '8-10 Hours',
    price: '$10.99',
    description:
      'Learn the building blocks of every website: semantic HTML structure and modern CSS layout. This course is designed for absolute beginners and gets you writing real pages fast.',
    color: '#e34f26'
  },
  {
    id: 'cpp-windows',
    name: 'C# Windows Desktop Development',
    tag: 'C#',
    level: 'Beginner',
    duration: '8-10 Hours',
    price: '$10.99',
    description:
      'Learn essential C# programming concepts and understand how to solve problems using logic and data structures. You will learn to work with arrays, loops, conditions, functions, and basic data organization.',
    color: '#178600'
  },
  {
    id: 'python',
    name: 'Python Basics and Data Handling',
    tag: 'Python',
    level: 'Beginner',
    duration: '8-10 Hours',
    price: '$10.99',
    description:
      'Learn Python basics and data handling. This course is designed for beginners who want a practical, hands-on introduction to one of the most in-demand languages.',
    color: '#3776ab'
  },
  {
    id: 'cpp-desktop',
    name: 'C# Windows Desktop Development',
    tag: 'C#',
    level: 'Beginner',
    duration: '8-10 Hours',
    price: '$10.99',
    description:
      'Learn the fundamentals of C# programming and build interactive desktop applications using Windows Forms. You will learn to work with forms, buttons, textboxes, events, and basic application logic.',
    color: '#9b4f96'
  }
];
