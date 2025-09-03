// Récupère les éléments nécessaires
const filterSelect = document.getElementById('filtre-categorie');
const categories = document.querySelectorAll('.categorie');

// Ajoute un écouteur d'événements au menu déroulant
filterSelect.addEventListener('change', () => {
  const selectedCategory = filterSelect.value;

  categories.forEach((categorie) => {
    if (selectedCategory === 'all' || categorie.dataset.category === selectedCategory) {
      categorie.style.display = 'block';
    } else {
      categorie.style.display = 'none';
    }
  });
});