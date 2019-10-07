import { handleActions, Action } from 'redux-actions';
import { Message } from './models'
import { setValue } from "./actions"
import { SET_VALUE } from "../types"
export const initialState:Message = {
  user: "",
  message: "",
  timestamp: 0
}
export default handleActions<Message,object>({
  [SET_VALUE]: (state:Message, action:Action<>)
})
