const loadQuote = ()=> {
    const url = `https://api.kanye.rest/`;
    fetch(url)
    .then(res=>res.json())
    .then(data=> displayQuotes(data.quote))
}



const displayQuotes = (quote) => {
    console.log(quote);
    const quoteDiv = document.getElementById('quote-div');
    quoteDiv.innerText = quote;

}
