const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      io.unobserve(e.target);
    }
  }
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
