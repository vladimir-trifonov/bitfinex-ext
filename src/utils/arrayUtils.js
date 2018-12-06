import { List } from 'immutable'

export const chunk = (arr, size) =>
  arr
    .reduce((acc, _, i) =>
      (i % size)
        ? acc
        : List([...acc, arr.slice(i, i + size)])
    , List([]))