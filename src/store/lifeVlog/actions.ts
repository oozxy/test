import { SystemState, UPDATE_SESSION, SystemActionTypes } from './models'

export function updateSession(newSession: SystemState): SystemActionTypes {
  return {
    type: UPDATE_SESSION,
    payload: newSession
  }
}