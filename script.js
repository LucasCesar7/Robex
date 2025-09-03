document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navLinks = document.getElementById("nav-links");

  // Assurer que le menu est bien caché au chargement en mode mobile
  if (window.innerWidth <= 1130) {
    navLinks.style.display = "none"; // Caché par défaut
  }

  // Ouvrir / Fermer le menu au clic
  hamburgerMenu.addEventListener("click", () => {
    if (navLinks.style.display === "none" || navLinks.style.display === "") {
      navLinks.style.display = "flex"; // Affiche le menu
    } else {
      navLinks.style.display = "none"; // Cache le menu
    }
  });

  // S'assurer que le menu redevient visible en mode desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1130) {
      navLinks.style.display = "flex"; // Toujours visible sur desktop
    } else {
      navLinks.style.display = "none"; // Caché par défaut en mobile
    }
  });
});
