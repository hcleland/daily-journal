console.log("i'm here");

/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
// const journalEntry1 = {
//         date: "April 10, 2019",
//         conceptsCovered: "JS querySelector & querySelectorAll",
//         content: "Practiced querySelector and querySelectorAll. querySelector will only choose the first element that it finds. querySelectorAll will find all the elements. I had to use a for loop during the exercises using querySelectorAll. 'The document.querySelector() method allows you to identify the first element that matches the CSS selector you specify.' 'If you want to get a list of all components that match your selector, you need to use the document.querySelectorAll() method.' ",
//         mood: "fine"
//     };
// JOURNAL ENTRY COMPONENT FUNCTION
// write a function that builds a journal entry HTML string template.

const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
        <p>${journalEntry1.date}</p>
        <p>${journalEntry1conceptsCovered}</p>
        <p>${journalEntry1.content}</p>
        <p>${journalEntry1.mood}</p>
    `
};



// RENDER JOURNAL ENTRIES to the DOM
// Now write a function whose reponsibility is to iterate your array of journal entries and add them to the DOM.

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
// const displayEntry = document.querySelector(".entryLog")
// const renderJournalEntries = (entries) => {
//     journalEntries.forEach(entry => {
//         displayEntry.innerHTML += `
//         <p>${entry.date}</p>
//         <p>${entry.conceptsCovered}</p>
//         <p>${entry.content}</p>
//         <p>${entry.mood}</p>
//         `
//     })
// };


const renderJournalEntries = (entries) => {
    const displayEntry = document.querySelector(".entryLog");
    entries.forEach(entry => {
        displayEntry.innerHTML += `
        <div>
        <p>Date: ${entry.date}</p>
        <p>Concepts Covered: ${entry.conceptsCovered}</p>
        <p>Journal Entry: ${entry.content}</p>
        <p>Mood: ${entry.mood}</p>
        </div>
        `
    })
};


const fetchedEntries = () => {
fetch("http://localhost:3000/journalEntries") // Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(parsedEntries => {
        console.log("entries", parsedEntries)
        // Invoke the render function
        renderJournalEntries(parsedEntries);
    })
};

fetchedEntries();

