const quotes=document.getElementById("quotes");
const author=document.getElementById("author");
const newQ=document.getElementById("newQ");
const tweetMe=document.getElementById("tweetMe");
AOS.init();
const tweetNow= () =>{
    let tweetPost =`https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
    window.open(tweetPost);
};

let quotesData="";
let realdata ="";
const getNewQuotes = () =>{
    let rnum= Math.floor(Math.random()*10);
    // console.log(realdata[rnum].author);
    quotesData=realdata[rnum];
    quotes.innerText=`${quotesData.text}`;
    quotesData.author == null ?
     ( author.innerText="Unknown"):
     ( author.innerText=`${quotesData.author}`);

};

const getQuotes = async () =>{
    const api="https://type.fit/api/quotes";
try {
    let data = await fetch(api);
    realdata = await data.json();
    getNewQuotes();
} catch (error) {}
};
tweetMe.addEventListener("click",tweetNow);
newQ.addEventListener('click',getNewQuotes);
getQuotes();

