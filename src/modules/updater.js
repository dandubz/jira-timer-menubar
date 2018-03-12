import Immutable from 'seamless-immutable'

// Actions
const SET_VERSION = 'jt/updater/SET_VERSION'
const SET_UPDATE_INFO = 'jt/updater/SET_UPDATE_INFO'
const SET_DOWNLOADED = 'jt/updater/SET_DOWNLOADED'
const CAN_UPDATE = 'jt/updater/CAN_UPDATE'

export const initialState = Immutable({
  version: null,
  updateInfo: null,
  downloaded: false,
  canUpdate: true,
})

// Reducer
export default function reducer (state = initialState, action = {}) {
  switch (action.type) {

    case SET_UPDATE_INFO:
      return state.set('updateInfo', action.updateInfo)

    case SET_VERSION:
      return state.set('version', action.version)

    case SET_DOWNLOADED:
      return state.set('downloaded', true)

    case CAN_UPDATE:
      return state.set('canUpdate', action.canUpdate)

    default: return state
  }
}

// Action Creators
export const setVersion = version => ({
  type: SET_VERSION,
  version
})

export const setUpdateInfo = updateInfo => ({
  type: SET_UPDATE_INFO,
  updateInfo
})

export const setDownloaded = () => ({
  type: SET_DOWNLOADED
})

export const canUpdate = canUpdate => ({
  type: CAN_UPDATE,
  canUpdate
})
