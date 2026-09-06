// instructors.js — fetches instructor data from the API and renders
// either the grid (instructors.html) or a single profile
// (instructor.html?id=...), depending on which container is present.

function instructorCard(instructor) {
  return `
    <a class="instructor-card" href="instructor.html?id=${instructor.id}">
      <span class="instructor-card__tag">${instructor.title.split(' ')[0]}</span>
      <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(instructor.name)}&background=${instructor.avatarBg}&color=fff&size=300" alt="${instructor.name}">
      <div class="instructor-card__body">
        <h3>${instructor.name}</h3>
        <span class="role">${instructor.name} - ${instructor.title}</span>
      </div>
    </a>
  `;
}

async function renderInstructorGrid() {
  const grid = document.querySelector('[data-instructor-grid]');
  if (!grid) return;
  const res = await fetch('/api/instructors');
  const data = await res.json();
  grid.innerHTML = data.instructors.map(instructorCard).join('');
}

async function renderInstructorDetail() {
  const wrap = document.querySelector('[data-instructor-detail]');
  if (!wrap) return;
  const id = new URLSearchParams(window.location.search).get('id');
  const res = await fetch(`/api/instructors/${id}`);

  if (!res.ok) {
    wrap.innerHTML = '<p>Instructor not found. <a href="instructors.html">Back to instructors</a></p>';
    return;
  }

  const { instructor } = await res.json();
  wrap.innerHTML = `
    <div class="detail-hero">
      <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(instructor.name)}&background=${instructor.avatarBg}&color=fff&size=300" alt="${instructor.name}">
      <div>
        <h1>${instructor.name}</h1>
        <p class="role">${instructor.title}</p>
      </div>
    </div>
    <div class="detail-body">
      <p>${instructor.bio}</p>
    </div>
  `;
}

renderInstructorGrid();
renderInstructorDetail();
