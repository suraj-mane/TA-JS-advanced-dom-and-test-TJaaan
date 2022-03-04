
let list = document.querySelector(".list");
let max = 3;
let index = 0;

function addQuote() {
  for(let i = 0; i < max; i++){
    let li = document.createElement('li');
    li.classList.add('lists');
    let p = document.createElement('p');
    p.classList.add('name');
    let span = document.createElement('sapn');
    span.classList.add('author');
    p.innerText = quotes[index].quoteText;
    span.innerText = quotes[index].quoteAuthor;
    li.append(p, span);
    list.append(li);
    index++;
  }
}


document.addEventListener('scroll', () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;
  let clientHeight = document.documentElement.clientHeight;
  if(scrollTop + clientHeight >= scrollHeight && index < quotes.length){
    addQuote();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  alert(`The Content of the DOM is Loaded`);
  addQuote();
});