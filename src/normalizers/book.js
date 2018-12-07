import { List } from 'immutable'

export const normalizeBookUpdate = (book, update) => {
  if(Array.isArray(update[1][0])) return List(update[1].map(List))

  let updated = book
  // Update orders
  const [price, count, amount] = update[1]
  // Get by price
  // if AMOUNT > 0 then bid else ask
  // When count > 0 add or update the price level
  if (count > 0) {
    // if amount > 0 add/update bids
    if (amount > 0) {
      const bids = book
        .filter((orders) => orders.get(0) === price && orders.get(1) > 0)
      // Update
      if (bids.size) {
        bids.forEach((orders) => orders.set(0, orders.get(1) + amount))
      // Add
      } else {
        updated = book.unshift(List([price, count, amount]))
      }
    // if amount < 0 add/update asks
    } else if (amount < 0) {
      const asks = book
        .filter((orders) => orders.get(0) === price && orders.get(1) <= 0)
      // Update
      if (asks.size) {
        asks.forEach((orders) => orders.set(0, orders.get(1) + amount))
      // Add
      } else {
        updated = book.unshift(List([price, count, amount]))
      }
    }
    return updated
  // When count = 0 delete the price level
  } else if (count === 0) {
    // if amount = 1 remove from bids
    if (amount === 1) {
      updated = book.filter((orders) => !(orders.get(0) === price && orders.get(1) > 0))
    //  if amount = -1 remove from asks
    } else if (amount === -1) {
      updated = book.filter((orders) => !(orders.get(0) === price && orders.get(1) < 0))
    }
  }
  return updated.slice(0, 30)
}
