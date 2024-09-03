document.addEventListener('DOMContentLoaded', function() {
    const recipes = [
        { name: 'Tarta de Manzana', ingredients: ['Manzanas', 'Harina', 'Azúcar', 'Mantequilla'] },
        { name: 'Paella', ingredients: ['Arroz', 'Mariscos', 'Azafrán', 'Pimientos'] },
        { name: 'Tacos', ingredients: ['Tortillas', 'Carne', 'Cebolla', 'Cilantro'] }
    ];

    const recipeList = document.getElementById('recipe-list');

    recipes.forEach(recipe => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${recipe.name}</strong><br>Ingredientes: ${recipe.ingredients.join(', ')}`;
        recipeList.appendChild(li);
    });
});