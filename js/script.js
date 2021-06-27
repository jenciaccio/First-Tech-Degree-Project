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
        year: 1990
    },

    {
        quote: "I used to jog but the ice cubes kept falling out of my glass.",
        source: "David Lee Roth",
        year: 1979
    },
    {
        quote: "I'm not a Woman, I'm a force of nature",
        source: "Courtney Love",
        year: 1998

    },
    {
        quote: "Life sucks, but in a beautiful kind of way",
        source: "Axle Rose",
        year: 1998
    },
    {
        quote: "Jazz, isn’t that just a series of mistakes diguised as musical composition?",
        source: "David St. Hubbins",
        year: 1992,
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

function getRandomQuote() {
    randomIndex = Math.floor(Math.random() * 5);
    return quotes[randomIndex];
}
console.log(getRandomQuote());

/***
 * `printQuote` function
 ***/



function printQuote() {
    displayedQuote = getRandomQuote();
    message = `<p class="quote">${displayedQuote.quote}</p>
    <p class="source">${displayedQuote.source}</p>`


}
console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);