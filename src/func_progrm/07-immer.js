// import { produce } from 'immer'
const { produce } = require('immer');

let book = { tittle: "tech World" }


function publish(book) {
    // book.isPublished = true;
    return produce(book, draftBook => {
      draftBook.isPublished = true;
    })
}

let updated = publish(book);

console.log(book); //{ tittle: 'tech World' }
console.log(updated); // { tittle: 'tech World', isPublished: true }