import { Message } from './models'
import { SET_VALUE } from "../types"
export function sendMessage(newMessage: Message){
  return {
    payload: newMessage
  }
} 