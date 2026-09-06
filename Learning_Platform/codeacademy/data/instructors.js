// data/instructors.js — instructor roster. Avatars are generated
// initials (via ui-avatars.com) rather than stock photos of real
// people, since these are placeholder profiles.

function avatar(name, bg) {
  const encoded = encodeURIComponent(name);
  return `https://ui-avatars.com/api/?name=${encoded}&background=${bg}&color=fff&size=300&font-size=0.33&bold=true`;
}

module.exports = [
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    title: 'Lead Code Design Engineer',
    bio: 'Sarah has spent over a decade building developer tools and leads our systems curriculum. She specializes in turning intimidating architecture concepts into approachable, hands-on lessons for beginners and career switchers alike.',
    avatarBg: '111111'
  },
  {
    id: 'chen-jonh',
    name: 'Chen Jonh',
    title: 'Senior Frontend Architect',
    bio: 'Chen has led frontend teams at several fast-growing startups. His courses focus on real-world component design, accessibility, and performance — the things textbooks tend to skip.',
    avatarBg: 'f4a6c1'
  },
  {
    id: 'jonh-doe',
    name: 'Jonh Doe',
    title: 'Backend Web Lead',
    bio: 'Jonh builds resilient backend systems for a living and teaches the same patterns he uses in production: clean APIs, sensible data models, and just enough architecture to scale without overengineering.',
    avatarBg: '111111'
  },
  {
    id: 'anya',
    name: 'Anya',
    title: 'Product Design Mentor',
    bio: 'Anya mentors aspiring product designers on translating rough ideas into interfaces people actually enjoy using, with an emphasis on research, iteration, and clear design rationale.',
    avatarBg: 'f4a6c1'
  },
  {
    id: 'jonan-zang-data',
    name: 'Jonan Zang',
    title: 'Data Science Mentor',
    bio: 'Jonan has spent years turning messy datasets into clear, actionable insight. His mentoring style is practical and project-based — you will spend more time in notebooks than in slide decks.',
    avatarBg: '111111'
  },
  {
    id: 'jonan-zang-mobile',
    name: 'Jonan Zang',
    title: 'Senior Mobile App Developer',
    bio: 'Jonan has shipped mobile apps used by millions and teaches the practical side of mobile development: performance, platform quirks, and getting an app from prototype to app store.',
    avatarBg: 'f4a6c1'
  }
];
