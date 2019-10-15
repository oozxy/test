import { ChatState, SEND_MESSAGE, DELETE_MESSAGE, ChatActionTypes } from './models'
const initialState: ChatState = {
  messages: [
    {
      user: "Alan",
      message: "test1",
      timestamp: 1
    },
    {
      user: "Alan2",
      message: "test2",
      timestamp: 2
    },
    {
      user: "Alan3",
      message: "test3",
      timestamp: 3
    },
  ]
}
export function chatReducer(state = initialState,action:ChatActionTypes): ChatState{
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages:[...state.messages,action.playload]
      }
    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(
          message => message.timestamp !== action.meta.timestamp
        )
      }
    default:
      return state
  }
}