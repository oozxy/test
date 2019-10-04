
import { createAction } from 'redux-actions';
import { Message } from './models'
import { SET_VALUE } from "../types"
export const setValue = createAction(
  SET_VALUE,
  (newMessage: Message) => ({newMessage})
);