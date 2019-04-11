console.log("i'm here");

/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const objectsJournalEntry = {
    date: "April 10, 2019",
    conceptsCovered: "JS querySelector & querySelectorAll",
    content: "Practiced querySelector and querySelectorAll. querySelector will only choose the first element that it finds. querySelectorAll will find all the elements. I had to use a for loop during the exercises using querySelectorAll. 'The document.querySelector() method allows you to identify the first element that matches the CSS selector you specify.' 'If you want to get a list of all components that match your selector, you need to use the document.querySelectorAll() method.' ",
    mood: "fine"
}

const objectsJournalEntry2 = {
    date: "April 11, 2019",
    conceptsCovered: "JS Objects",
    content: "Started learning about objects in JS. And somewhat about arrays. Objects have open and closing curly braces. Objects contain keys and values separated by a colon. The key/value pairs in objects are separated by a comma. 'Arrays are collections of similiar things. Objects are ways to define details of a single thing. Both an array and an object can be assigned to a variable.' ",
    mood: "fine"
}

const journal1 = [];

journal1.push(objectsJournalEntry, objectsJournalEntry2);

console.log(journal1);