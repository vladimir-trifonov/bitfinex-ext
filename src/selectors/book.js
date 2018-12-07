import { createSelector } from 'reselect'

const getBook = (state) => state.book

export const getBookSelector = createSelector(
  [ getBook ], 
  (book) => !book
    ? book
    : book.slice(0, 30)
)