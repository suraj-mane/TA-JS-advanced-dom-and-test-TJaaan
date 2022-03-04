let form = document.querySelector('form');
let ul = document.querySelector('.root');

let items = JSON.parse(localStorage.getItem("items"));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  var item = event.target.elements.title.value;
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
  CreateUI(items, ul);
});

function CreateUI(data, ul){
  data.forEach(element => {
    document.inerHTML = "";
    let li = document.createElement('li');
    li.classList.add('list');
    let p = document.createElement('li');
    p.classList.add('list-item');
    p.innerText = element;
    li.append(p);
    ul.append(li);
  });
}
CreateUI(items, ul);