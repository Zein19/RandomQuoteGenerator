// Assign variables
const quote = document.querySelector('h2')
const btn = document.getElementById('btn')
const author = document.querySelector('h3')

const url = "https://api.quotable.io/random";


 let  newQuote = () =>{
    fetch(url)
    .then((data) => data.json())
    .then((item) =>{
        quote.innerText = `"${item.content}"`;
        author.innerText = item.author;
    });
 };
    
window.addEventListener('load', newQuote)
btn.addEventListener('click', newQuote)