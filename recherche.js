document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");

    // Déclencher la recherche avec la touche Entrée
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            ouvrirPage();
        }
    });
});

function ouvrirPage() {
    const a = document.getElementById("search").value.toLowerCase().trim();
    console.log(a);

    switch (true) {
        case a.includes("kit"):
            window.open("/Kit-grillage.html", "_self");
            break;
        case a.includes ("poteau"):
            window.open("/Poteau.html", "_self");
            break;
        case a.includes("portail"):
            window.open("/Portails.html", "_self");
            break;
        case a.includes("portillon"):
            window.open("/Portillons.html", "_self");
            break;

        case a.includes("grillage"):
            window.open("/grillage.html", "_self");
            break;
            
        case a.includes("pilier"):
            window.open("/Pilier.html", "_self");
            break;
            
        case a.includes("fixation"):
        case a.includes("platine"):
            window.open("/Fixation-platine.html", "_self");
            break;
            
        case a.includes("lame"):
            window.open("/lames.html", "_self");
            break;
        default:
            alert("Aucun résultat trouvé pour : " + a);
    }
}