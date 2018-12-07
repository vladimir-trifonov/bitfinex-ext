import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { socketSubscribeAction, socketUnsubscribeAction } from '../../actions'

export default (WrappedComponent, { channel, prop, onUnsubscribeAction }) => {
  class withSubscription extends PureComponent {
    componentDidMount () {
      const { socketSubscribe, onUnsubscribe } = this.props
      onUnsubscribe()
      socketSubscribe()
    }
  
    componentDidUpdate ({ [prop]: prev }) {
      const { socketSubscribe, onUnsubscribe } = this.props
      if (this.props[prop] !== prev) {
        onUnsubscribe()
        socketSubscribe()
      }
    }

    componentWillUnmount () {
      const { socketUnsubscribe, onUnsubscribe } = this.props
      socketUnsubscribe()
      onUnsubscribe()
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return connect(
    null,
    (dispatch, state) => ({ 
      socketSubscribe: () => state[prop] && 
        dispatch(socketSubscribeAction({ [prop]: state[prop], channel, overwrite: true })),
      socketUnsubscribe: () => dispatch(socketUnsubscribeAction({ channel })),
      onUnsubscribe: () => !!onUnsubscribeAction && dispatch(onUnsubscribeAction())
    })
  )(withSubscription)
}
