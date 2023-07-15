import fancyfood from './resource/fancy-food.jpeg';
import fancysalad from './resource/fancy-salad.jpeg';
import fancysushi from './resource/fancy-sushi.jpeg';

const menu = function () {
  const menuContainer = document.createElement('div');

  function createItem(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }

  const items = [
    new createItem('Fancy Food', 'This food is indeed fancy', fancyfood),
    new createItem('Fancy Salad', 'This salad is kinda fancy', fancysalad),
    new createItem('Fancy Sushi', 'This fish looks (and is) expensive', fancysushi)
  ];

  items.forEach(item => {
    const menuItemElement = document.createElement('div');
    menuItemElement.classList.add('images')
    menuItemElement.innerHTML = `
    <div class='textmenu'> 
    <h2>${item.name}</h2>
    <p>${item.description}</p>
    </div>
      <img src="${item.image}" alt="${item.name} class= item-img">
    `;
    menuContainer.appendChild(menuItemElement);
  });

  return menuContainer;
};

export default menu;
