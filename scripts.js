function pickRandomQuote(){
    return Math.floor(Math.random() * quotes.length) +1;
}
function generateQuote(){
    for (var i = 0; i < quotes.length; i++) {
        document.getElementById('quote').innerHTML = quotes[pickRandomQuote()].quote;
        document.getElementById('author').innerHTML = quotes[pickRandomQuote()].author;
    }
}
