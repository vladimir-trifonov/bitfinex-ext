import { createSelector } from 'reselect'

const getBook = ({ book }) => book

export const getBookSelector = createSelector(
  [ getBook ], 
  (book) => book
)