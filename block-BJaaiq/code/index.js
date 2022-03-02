
quotes.forEach((ele) => console.log(ele.quoteText));
let list = document.querySelector(".list");

class Display {
  constructor(arr){
    this.arr = arr;
  }
  CreatUI(){
    let li = document.createElement('li');
    let p = document.createElement('p');
    let span = document.createElement('sapn');
    p.innerText = this.quoteText;
    span.innerText =this.quoteAuthor;
    li.append(p, span);
    list.append(li);
  }
}

let d = new Display();
