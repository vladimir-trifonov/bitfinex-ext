import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { 
  fetchSymbolsAction, 
  currentSymbolChangedAction
} from '../../actions'
import { getSymbolsSelector } from '../../selectors'
import { Table } from '../Table'

class Symbols extends PureComponent {
  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.props.fetchSymbols()
  }

  handleClick (rowIndex, cellIndex) {
    const { symbols } = this.props
    const row = symbols.get(rowIndex)
    const symbol = row.get(cellIndex)
    this.props.currentSymbolChanged(symbol)
  }

  render () {
    const { symbols } = this.props
    if (!symbols) return null

    return (
      <Table
        items={symbols}
        onClick={this.handleClick}
        title = 'Symbols'
        count={symbols.size}
      />
    )
  }
}

export default connect(
  (state) => ({ symbols: getSymbolsSelector(state) }),
  (dispatch) => ({ 
    fetchSymbols: () => dispatch(fetchSymbolsAction()),
    currentSymbolChanged: (symbol) => dispatch(currentSymbolChangedAction(symbol)),
  })
)(Symbols)