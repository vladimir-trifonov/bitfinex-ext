import { handleActions } from 'redux-actions'

export default handleActions(
  {
    INIT: (
      state
    ) => {
      return { ...state };
    }
  },
  []
)