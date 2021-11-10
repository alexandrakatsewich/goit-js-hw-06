const getNumber = document.querySelector('ul');

console.log(`Number of categories: ${getNumber.childElementCount}`);

const categories = document.querySelectorAll('li.item');
categories.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
})