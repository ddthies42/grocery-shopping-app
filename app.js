async function loadRecipes() {
    const res = await fetch('recipes.json');
    const recipes = await res.json();
    const list = document.getElementById('recipe-list');
    list.innerHTML = recipes.map(r => `<h3>${r.name}</h3>`).join('');
  }
  loadRecipes();