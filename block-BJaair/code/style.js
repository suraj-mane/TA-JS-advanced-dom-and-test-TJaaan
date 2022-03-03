let input = document.querySelector('.title');
let input2 = document.querySelector('.category');
let btn = document.querySelector('button');
let root = document.querySelector('.root');

let values1 = [];
let values2 = [];

function createUI(){
  let value = input.value;
  let value2 = input2.value;
  localStorage.setItem('title',value);
  localStorage.setItem('category',value2);
  values1.push(localStorage.getItem('title'));
  values2.push(localStorage.getItem('category'));
  let div = document.createElement('div');
  div.classList.add('display');
  let p = document.createElement('p');
  p.classList.add('title');
  let span = document.createElement('span');
  span.classList.add('title');
  p.innerText = values1;
  span.innerText = values2;
  div.append(p, span);
  root.append(div);
}


btn.addEventListener('click', createUI);



