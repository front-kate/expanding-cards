const panels = document.querySelectorAll('.panel');
const fruit = document.querySelector('.fruit');
const savory = document.querySelector('.savory');
const pizza = document.querySelector('.pizza');
const review = document.querySelector('.review');
const dessert = document.querySelector('.dessert');
const searchBtn = document.querySelector('.searchBtn')

const search = document.querySelector('.search');



// click event panel expansion
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  });  
});

// removing activation of panel expansion
function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}

//search elements
const fruitDrink= [
  'str',
  'blu',
  'water',
  'cof',
  'cher',
  'kiw',
  'hotc',
  'mil',
  'ju',
  'fru',
  'drin'
];

const sweets = [
  'cak',
  'brea',
  'muff',
  'crois',
  'pastr',
  'dani'
];

const savories = [
  'pa',
  'spag',
  'toma',
  'chee',
  'garl',
  'pota',
  'eg',
  'ric',
  'avo',
  'chic',
  'bee',
  'por',
  'lam',
  'oli'
];

const pizzas = [
  'pepp',
  'capp',
  'supr',
  'meatlo',
  'veget',
  'bbq',
  'marga',
  'marin',
  'pizz'
];

const reviews = [
  'rest',
  'revi'
];

// search value matching against search menu
const searched = (panelClass, items) => {
  search.addEventListener('keydown', () => {
    searchItems(panelClass, items);    
  })  
}
// action upon search result
const searchItems = (panelClass, items) => {
  for(let i = 0; i < items.length; i++) {
    if(search.value.includes(items[i])) {
      removeActiveClasses()
      panelClass.classList.add('active');
    }    
  }  
}
//prevent search button submission
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
})
//call the searched function 
searched(fruit, fruitDrink)
searched(savory, savories)
searched(dessert, sweets)
searched(pizza, pizzas)
searched(review, reviews)


