function pickRandomQuote(){
    return Math.floor(Math.random() * quotes.length) +1;
}
function generateQuote(){
    var selectdQ = pickRandomQuote();
    for (var i = 0; i < quotes.length; i++) {
        document.getElementById('quote').innerHTML = quotes[selectdQ].quote;
        document.getElementById('author').innerHTML = "- " + quotes[selectdQ].author;
    }
}
