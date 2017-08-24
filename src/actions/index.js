export function selectBook(book) {

  // need to return an action, an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
