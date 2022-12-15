import { combineReducers } from 'redux'

import { reducer as discoverNav1Reducer } from '@/pages/discover/Nav1/store'

export default combineReducers({
  discover: discoverNav1Reducer
})
