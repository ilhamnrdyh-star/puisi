document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a.link");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // cegah langsung pindah

      const target = link.getAttribute("href");

      document.body.classList.add("fade-out"); // animasi fade

      setTimeout(() => {
        window.location.href = target; // pindah
      }, 600);
    });
  });
});
