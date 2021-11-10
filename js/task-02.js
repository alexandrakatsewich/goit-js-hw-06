const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('ul')


ingredients.forEach(ingredient => {
  const createLi = document.createElement('li');
  createLi.textContent = ingredient;

  ingredientsEl.append(createLi);
})