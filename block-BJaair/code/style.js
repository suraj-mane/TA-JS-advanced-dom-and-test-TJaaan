let form = document.querySelector('form');
let ul = document.querySelector('.root');

let cardsData = JSON.parse(localStorage.getItem('cards'));

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let title = event.target.elements.title.value;
  let category = event.target.elements.category.value;
  cardsData.push({title, category});
  localStorage.setItem('cards',JSON.stringify(cardsData));
  createUI(cardsData, ul);
});

function createUI(data, root) {
  var fragment = new DocumentFragment();
  data.forEach((cardInfo) => {
    let div = document.createElement('div');
    div.classList.add('display');
    let p = document.createElement('p');
    p.innerText = cardInfo.title;
    let h2 = document.createElement('h2');
    h2.innerText = cardInfo.category;
    div.append(p, h2);
    fragment.appendChild(div);
  });
  root.append(fragment);
}