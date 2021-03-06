/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 ***/



let quotes = [{
        quote: "We believed that anything that was worth doing was worth overdoing.",
        source: "Steven Tyler",
        group: "Aerosmith",
        year: 1990
    },

    {
        quote: "I used to jog but the ice cubes kept falling out of my glass.",
        source: "David Lee Roth",
        group: "Van Halen",
        year: 1979
    },
    {
        quote: "I'm not a Woman, I'm a force of nature",
        source: "Courtney Love",
        group: "Hole",
        year: 1998

    },
    {
        quote: "Life sucks, but in a beautiful kind of way",
        source: "Axle Rose",
        group: "Guns 'N' Roses",
        year: 1998
    },

    {
        quote: "Jazz, isn’t that just a series of mistakes diguised as musical composition?",
        source: "David St. Hubbins",
        group: "Spinal Tap",
        year: 1984,
        citation: "This is Spinal Tap"
    }


];


/***
 * `getRandomQuote` function
 ***/
let selectedQuote;
let randomIndex;
let displayedQuote;
let message;

//picks random quote
function getRandomQuote() {
    randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}


/***
 * `printQuote` function
 ***/



//builds quote string to be printed
function printQuote() {
    displayedQuote = getRandomQuote();
    message = `<p class="quote">${displayedQuote.quote}</p>
    <p class="source">${displayedQuote.source}`;
    if (displayedQuote.citation) {
        message += `<span class="citation">${displayedQuote.citation}</span>`
    }
    if (displayedQuote.year) {
        message += `<span class="year">${displayedQuote.year}</span>`
    }
    if (displayedQuote.group) {
        message += `<span class="group">${displayedQuote.group}</span>`
    }

    message += `</p>`;
    return document.getElementById('quote-box').innerHTML = message; //applies random quote and props
}

//selects random backgound color
const randomValue = () => Math.floor(Math.random() * 256);

//changes background color
function bgColor() {
    const color = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
    return document.body.style.background = color; //applies random color to background


};




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

setInterval(printQuote, 10000); //automatically prints new quote every 10 seconds
setInterval(bgColor, 10000); //automatically changes background color every 10 seconds
document.getElementById('load-quote').addEventListener("click", printQuote, false); //changes quote on click

document.getElementById('load-quote').addEventListener("click", bgColor, false); //changes background color on click