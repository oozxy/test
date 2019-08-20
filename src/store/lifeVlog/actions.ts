import { Message} from './types'
export function sendMessage(newMessage: Message){
  return {
    payload: newMessage
  }
}