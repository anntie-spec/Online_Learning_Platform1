// courses.js — fetches course data from the API and renders either the
// grid (courses.html) or a single course page (course.html?id=...).

function courseCard(course) {
  return `
    <a class="course-card" href="course.html?id=${course.id}">
      <div class="course-card__logo" style="background:${course.color}">${course.tag}</div>
      <div class="course-card__body">
        <h3>${course.name}</h3>
        <div class="course-card__meta">
          <span>${course.level}</span>
          <span>${course.duration}</span>
        </div>
        <span class="course-detail__price">${course.price}</span>
      </div>
    </a>
  `;
}

async function renderCourseGrid() {
  const grid = document.querySelector('[data-course-grid]');
  if (!grid) return;
  const res = await fetch('/api/courses');
  const data = await res.json();
  grid.innerHTML = data.courses.map(courseCard).join('');
}

async function renderCourseDetail() {
  const wrap = document.querySelector('[data-course-detail]');
  if (!wrap) return;
  const id = new URLSearchParams(window.location.search).get('id');
  const res = await fetch(`/api/courses/${id}`);

  if (!res.ok) {
    wrap.innerHTML = '<p>Course not found. <a href="courses.html">Back to courses</a></p>';
    return;
  }

  const { course } = await res.json();
  wrap.innerHTML = `
    <div class="course-detail__head">
      <div class="course-detail__logo" style="background:${course.color}">${course.tag}</div>
      <h1>${course.name}</h1>
    </div>
    <div class="course-detail__meta">
      <span>${course.level}</span>
      <span>${course.duration}</span>
      <span class="course-detail__price">${course.price}</span>
    </div>
    <div class="course-detail__card">
      <h4>COURSE DESCRIPTION</h4>
      <p>${course.description}</p>
      <button class="btn btn--primary btn--block" type="button">Enroll Now</button>
    </div>
  `;
}

renderCourseGrid();
renderCourseDetail();
