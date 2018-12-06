const ws = WebSocket

export default (() => {
  const subscriptions = {}
  let queue = []
  const w = new ws(process.env.REACT_APP_BITFINEX_SOCKET_URL)

  const sendMessage = (msg) => w.send(JSON.stringify(msg))
  const getChanIdByChannel = (channel) => Object.keys(subscriptions)
    .find((id) => subscriptions[id] === channel)
  const removeFromQueue = (channel) => {
    queue = queue.filter(({channel : ch}) => channel === ch)
  }
  const subscribeToChannel = ({channel, symbol, overwrite}) => {
    if (overwrite) unsubscribeFromChannel(channel)
    removeFromQueue(channel)
  
    sendMessage({
      event: 'subscribe', 
      channel, 
      symbol
    })
  }
  const unsubscribeFromChannel = (channel) => {
    if (!Object.keys(subscriptions).length) return  
    const chanId = getChanIdByChannel(channel)

    if (!subscriptions[chanId]) return
    delete subscriptions[chanId]
  
    sendMessage({
      event: 'unsubscribe', 
      chanId: chanId
    })
  }
  const subscribe = (channel, symbol, overwrite) => {
    w.readyState === w.OPEN
      ? subscribeToChannel({channel, symbol, overwrite})
      : queue.push({ channel, symbol, overwrite })
  }
  const onSubscribed = ({ channel, chanId }) => subscriptions[chanId] = channel
  const onMessage = (data) => {}

  w.onopen = () => {
    while(queue.length) subscribeToChannel(queue.shift())
  }
  w.onmessage = (msg) => {
    const data = JSON.parse(msg.data)
    // TODO: remove console.log
    console.log(data)
    if (Array.isArray(data)) {
      const [ , ...payload ] = data
      onMessage(payload)
    } else {
      data.event === 'subscribed'&& onSubscribed(data)
    }
  }

  return { 
    subscribe,
    unsubscribe: unsubscribeFromChannel
  }
})()