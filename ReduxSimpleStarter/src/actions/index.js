export function selectBook(book) {
    console.log("Selected book:" + book.title);
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}
