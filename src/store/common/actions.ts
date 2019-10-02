
import { createAction } from 'redux-actions';
import { Message } from './models'
import { SET_VALUE } from "../types"
const set_value = createAction(
  SET_VALUE,
  (newMessage: Message) => ({newMessage})
);
export {
  set_value
}