import { List } from 'immutable'

export const normalizeBookUpdate = (book, update) => {
  if(Array.isArray(update[1][0])) return List(update[1])
  return book
  // return book.unshift(List(update[1]))
}
