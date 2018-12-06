const ws = WebSocket

export default (() => {
  let subscriptions = {}
  const w = new ws(process.env.REACT_APP_BITFINEX_WS_URL)

  const sendMessage = (msg) => w.send(JSON.stringify(msg))

  const subscribeToChannel = (channel, symbol) => {
    sendMessage({
      event: 'subscribe', 
      channel, 
      symbol
    })
  }

  const getChanIdByChannel = (channel) => {
    return Object.keys(subscriptions).find((id) => subscriptions[id] === channel)
  }

  const unsubscribeFromChannel = (chanId, channel) => {
    if (!Object.keys(subscriptions).length) return
    if (!chanId) chanId = getChanIdByChannel(channel)

    if (chanId) {
      delete subscriptions[chanId]

      sendMessage({
        event: 'unsubscribe', 
        chanId: chanId
      })
    }
  }

  const subscribe = (channel, symbol, overwrite, repeat = 3) => {
    if (w.readyState === w.OPEN) {
      if (overwrite) unsubscribeFromChannel(null, channel)
      subscribeToChannel(channel, symbol)
    } else {
      repeat && setTimeout(() => 
        (subscribe(channel, symbol, overwrite, repeat - 1))
      , 5000)
    }
  }

  const unsubscribe = (channel) => unsubscribeFromChannel(null, channel)

  w.onmessage = (msg) => {
    const data = JSON.parse(msg.data)
    if (Array.isArray(data)) {
      // const [ chanId, ...payload ] = data

      // TODO: emit
    } else {
      if (data.event === 'subscribed') {
        const { channel, chanId } = data
        subscriptions[chanId] = channel
      }
    }

    console.log(data)
  }

  return { 
    subscribe,
    unsubscribe
  }
})()