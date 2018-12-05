const ws = WebSocket

export default (() => {
  let subscriptions = {}
  let chanIds = []
  const w = new ws(process.env.REACT_APP_BITFINEX_WS_URL)

  const isOpen = () => w.readyState === w.OPEN

  const sendMessage = (msg) => {
    w.send(JSON.stringify(msg))
  }

  const isSubscriptionValid = (chanId) => {
    return chanIds.indexOf(chanId) !== -1
  }

  const subscribeToChannel = (channel, symbol) => {
    sendMessage({
      event: 'subscribe', 
      channel, 
      symbol
    })
  }

  const getChanIdFromSubscriptions = (channel) => {
    let chanId = null
    Object.keys(subscriptions).some((id) => {
      const subscription = subscriptions[id]
      if (subscription.channel === channel) {
        chanId = id
        return true
      }
      return false
    })

    return chanId
  }

  const unsubscribeFromChannel = (chanId, channel) => {
    if (!Object.keys(subscriptions).length) return
    if (!chanId) {
      chanId = getChanIdFromSubscriptions(channel)
    }

    if (chanId) {
      const index = chanIds.indexOf(chanId)
      if (index !== -1) chanIds.splice(index, 1)
      delete subscriptions[chanId]

      sendMessage({
        event: 'unsubscribe', 
        chanId: chanId
      })
    }
  }

  const msgSubscriptionOk = ({ channel, symbol, chanId }) => {
    chanIds.push(chanId)
    subscriptions[chanId] = {
      channel, symbol
    }
  }

  const subscribe = (channel, symbol, overwrite) => {
    if (isOpen()) {
      if (overwrite) unsubscribeFromChannel(null, channel)
      subscribeToChannel(channel, symbol)
    } else {
      setTimeout(() => (subscribe(channel, symbol, overwrite)), 5000)
    }
  }

  const unsubscribe = (channel) => unsubscribeFromChannel(null, channel)

  w.onmessage = (msg) => {
    const data = JSON.parse(msg.data)
    if (Array.isArray(data)) {
      const [ chanId, updates ] = data
      if (!isSubscriptionValid(chanId)) {
        unsubscribeFromChannel(chanId)
      } else {
        if (Array.isArray(updates)) {
          // TODO
        }
      }
    } else {
      if (data.event === 'subscribed') {
        msgSubscriptionOk(data)
      }
    }

    console.log(data)
  }

  return { 
    subscribe,
    unsubscribe
  }
})()