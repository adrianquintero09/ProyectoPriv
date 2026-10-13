// Interacciones pequeñas de la página de inicio.
document.addEventListener("DOMContentLoaded", () => {
  // En móvil, cerrar el menú después de seleccionar una sección.
  const nav = document.querySelector("#mainNav");
  const navLinks = document.querySelectorAll("#mainNav .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 1200 && nav.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Cambia el enlace activo al desplazarse por la página.
  const sections = document.querySelectorAll("main section[id], main header[id]");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const current = document.querySelector(`#mainNav .nav-link[href="#${entry.target.id}"]`);
        if (current) {
          navLinks.forEach((item) => item.classList.remove("active"));
          current.classList.add("active");
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => observer.observe(section));
  }
});
