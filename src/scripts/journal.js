console.log("i'm here");

/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntry1 = {
        date: "April 10, 2019",
        conceptsCovered: "JS querySelector & querySelectorAll",
        content: "Practiced querySelector and querySelectorAll. querySelector will only choose the first element that it finds. querySelectorAll will find all the elements. I had to use a for loop during the exercises using querySelectorAll. 'The document.querySelector() method allows you to identify the first element that matches the CSS selector you specify.' 'If you want to get a list of all components that match your selector, you need to use the document.querySelectorAll() method.' ",
        mood: "fine"
    };
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

const journalEntries = [
    {
        date: "04/10/2019",
        conceptsCovered: "JS querySelector & querySelectorAll",
        content: "Practiced querySelector and querySelectorAll. querySelector will only choose the first element that it finds. querySelectorAll will find all the elements. I had to use a for loop during the exercises using querySelectorAll. 'The document.querySelector() method allows you to identify the first element that matches the CSS selector you specify.' 'If you want to get a list of all components that match your selector, you need to use the document.querySelectorAll() method.' ",
        mood: "fine"
    },
    {
        date: "April 17, 2019",
        conceptsCovered: "Lots of stuff",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        mood: "super"
    },
    {
        date: "April 24, 2019",
        conceptsCovered: "Lots more stuff",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        mood: "super duper"
    }
];

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

const displayEntry = document.querySelector(".entryLog")
const renderJournalEntries = (entries) => {
    journalEntries.forEach(entry => {
        displayEntry.innerHTML += `
        <form action="">
        <fieldset class="container">
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate">${entry.date}
        </fieldset>
        <p>${entry.conceptsCovered}</p>
        <p>${entry.content}</p>
        <p>${entry.mood}</p>
        <fieldset class="container">
        <label for="conceptsCovered">Concepts covered</label>
        <input type="text" name="conceptsCovered" id="conceptsCovered">${entry.conceptsCovered}
        </fieldset>
        </form>
        `
    })
};

// Invoke the render function
renderJournalEntries();


