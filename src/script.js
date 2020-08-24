function createPannenkoek() {
  let firstName = prompt("What is your firstname?");
  let country = prompt("In what country do you live?");
  country = country.toLowerCase().trim();
  let header = document.querySelector("h1");
  let recept = document.querySelector("p");

  if (
    country === "the netherlands" ||
    country === "nederland" ||
    country === "netherlands" ||
    country === "holland"
  ) {
    header.innerHTML = "Ik hou van Pannenkoeken 🇳🇱";
    recept.innerHTML =
      "<ul><li>300 g tarwebloem</li><li>1 tl zout</li><li>2 middelgrote eieren</li><li>500 ml halfvolle melk</li><li>30 g ongezouten roomboter</li></ul>1. Zeef de bloem met het zout boven een grote beslagkom. Voeg de eieren en de helft van de melk toe en klop met een garde tot een glad beslag. Schenk de rest van de melk erbij en klop opnieuw glad. Dek de kom af met vershoudfolie en laat het beslag 30 min. staan. Verhit een klontje boter in een koekenpan van 20 cm doorsnee en schep er een soeplepel beslag in. Draai de pan rond zodat de hele bodem bedekt is. <br /> 2. Laat de pannenkoek 2 min. op middelhoog vuur bakken tot de bovenkant droog is en de onderkant goudbruin. Draai de pannenkoek om en bak nog 1 min. Herhaal met de rest van het beslag. Houd de pannenkoeken warm onder een deksel of een bord tot al het beslag gebruikt is. <br /> <strong>Combinatietip:</strong> Je kunt een snufje kaneel toevoegen aan het beslag.";
    alert(`Bekijk hier het recept. Eetsmakelijk ${firstName}!`);
  } else if (country === "france" || country === "french") {
    header.innerHTML = "J'taime Pannenkoeken 🇫🇷";
    recept.innerHTML =
      "<ul><li>2 eggs</li><li>2 c milk</li><li>½ tsp salt</li><li>2 c unbleached all-purpose flour</li><li>Butter, for cooking</li></ul>In a large bowl, beat the egg until slightly foamy. Add the milk and salt, whisking to combine. Add the flour, slowly, whisking as you add, until the batter is smooth. Heat a 10 inch skillet over medium heat. Add a little butter to coat the skillet. Add ½ cup of batter to the pan and swirl it around to coat the pan. (If using add-ins, sprinkle them over top of the wet batter.) Cook the pannekoek over medium heat until it is just getting dry on the top and releases from the pan, 2-3 minutes. Flip the pannekoek and cook for 1-2 minute on the second side, until lightly golden. Remove the pannekoek from the plan and place on a platter. Keep your stack of pannekoeken warm in a warm oven while you coat the skillet again with butter and cook up the rest of the batter.";
    alert(`Voir la recette ici. Manger savoureux ${firstName}!`);
  } else if (country === "spain" || country === "españa") {
    header.innerHTML = "Me gustan Pannenkoeken 🇪🇸";
    recept.innerHTML =
      "<ul><li>2 eggs</li><li>2 c milk</li><li>½ tsp salt</li><li>2 c unbleached all-purpose flour</li><li>Butter, for cooking</li></ul>In a large bowl, beat the egg until slightly foamy. Add the milk and salt, whisking to combine. Add the flour, slowly, whisking as you add, until the batter is smooth. Heat a 10 inch skillet over medium heat. Add a little butter to coat the skillet. Add ½ cup of batter to the pan and swirl it around to coat the pan. (If using add-ins, sprinkle them over top of the wet batter.) Cook the pannenkoek over medium heat until it is just getting dry on the top and releases from the pan, 2-3 minutes. Flip the pannenkoek and cook for 1-2 minute on the second side, until lightly golden. Remove the pannenkoek from the plan and place on a platter. Keep your stack of pannenkoeken warm in a warm oven while you coat the skillet again with butter and cook up the rest of the batter.";
    alert(`Ver la receta aquí. Disfrute de su comida ${firstName}!`);
  } else if (
    country === "brasil" ||
    country === "brazil" ||
    country === "portugal"
  ) {
    header.innerHTML = "Eu amo Pannenkoeken 🇵🇹 🇧🇷";
    recept.innerHTML =
      "<ul><li>2 eggs</li><li>2 c milk</li><li>½ tsp salt</li><li>2 c unbleached all-purpose flour</li><li>Butter, for cooking</li></ul>In a large bowl, beat the egg until slightly foamy. Add the milk and salt, whisking to combine. Add the flour, slowly, whisking as you add, until the batter is smooth. Heat a 10 inch skillet over medium heat. Add a little butter to coat the skillet. Add ½ cup of batter to the pan and swirl it around to coat the pan. (If using add-ins, sprinkle them over top of the wet batter.) Cook the pannenkoek over medium heat until it is just getting dry on the top and releases from the pan, 2-3 minutes. Flip the pannenkoek and cook for 1-2 minute on the second side, until lightly golden. Remove the pannenkoek from the plan and place on a platter. Keep your stack of pannenkoeken warm in a warm oven while you coat the skillet again with butter and cook up the rest of the batter.";
    alert(`Veja a receita aqui. Comer gostoso ${firstName}!`);
  } else {
    header.innerHTML = "I ❤️ Pannenkoeken";
    recept.innerHTML =
      "<ul><li>2 eggs</li><li>2 c milk</li><li>½ tsp salt</li><li>2 c unbleached all-purpose flour</li><li>Butter, for cooking</li></ul>In a large bowl, beat the egg until slightly foamy. Add the milk and salt, whisking to combine. Add the flour, slowly, whisking as you add, until the batter is smooth. Heat a 10 inch skillet over medium heat. Add a little butter to coat the skillet. Add ½ cup of batter to the pan and swirl it around to coat the pan. (If using add-ins, sprinkle them over top of the wet batter.) Cook the pannenkoek over medium heat until it is just getting dry on the top and releases from the pan, 2-3 minutes. Flip the pannenkoek and cook for 1-2 minute on the second side, until lightly golden. Remove the pannenkoek from the plan and place on a platter. Keep your stack of pannenkoeken warm in a warm oven while you coat the skillet again with butter and cook up the rest of the batter.";
    alert(`View the recipe here. Enjoy your meal ${firstName}!`);
  }
}
let button = document.querySelector(".buttonCreate");
button.addEventListener("click", createPannenkoek);
