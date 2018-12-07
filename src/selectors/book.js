import { createSelector } from 'reselect'

const getBook = (state) => state.book

export const getBookSelector = createSelector(
  [ getBook ], 
  (book) => book
)