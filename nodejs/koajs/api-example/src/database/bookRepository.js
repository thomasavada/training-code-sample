const books = [
  {id: 101, name: 'Fight Club', author: 'Chuck Palahniuk'},
  {id: 102, name: 'Sharp Objects', author: 'Gillian Flynn'},
  {id: 103, name: 'Frankenstein', author: 'Mary Shelley'},
  {id: 104, name: 'Into The Willd', author: 'Jon Krakauer'}
];

/**
 *
 * @returns {[{author: string, name: string, id: number}, {author: string, name: string, id: number}, {author: string, name: string, id: number}, {author: string, name: string, id: number}]}
 */
function getAll() {
  return books;
}

/**
 *
 * @param id
 * @returns {{author: string, name: string, id: number} | {author: string, name: string, id: number} | {author: string, name: string, id: number} | {author: string, name: string, id: number}}
 */
function getOne(id) {
  return books.find(book => book.id === parseInt(id));
}

module.exports = {
  getOne,
  getAll
};
