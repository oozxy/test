import { Message} from './models'
export function sendMessage(newMessage: Message){
  return {
    payload: newMessage
  }
}