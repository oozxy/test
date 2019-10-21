import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from "redux";
import { Message, ChatState } from "../../store/common/models"
import { sendMessage, deleteMessage} from "../../store/common/actions"
export interface IHomePageProps {
  name: string,
  messages: Message[]
}
export interface IHomePageState {
  name: string
}
 class HomeComponent extends React.Component<IHomePageProps,IHomePageState> {
  constructor(props: IHomePageProps) {
    super(props);
    this.state = {
      name: props.name
    };
  }
  public setName = () => {
    this.setState({
      name:"polly111"
    })
  }
  public render(){
    const { name } = this.state;
    const { messages } = this.props
    return (
      <div>
         <div onClick={this.setName}> set name </div>
         <div>{name}</div>
         <ul>
          {messages.map((val,index) => {
            return (
              <li key={index}>{val.message} {val.user}</li>
            )
          })}
         </ul>
      </div>
    )
  }
}
const mapStateToProps = (state: any)=>{
  return {
    messages: state.chat.messages
  }
}
const mapDispatchToProps = (dispatch: Dispatch) =>{
  return {
    delete:bindActionCreators(deleteMessage,dispatch),
    send:bindActionCreators(sendMessage,dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent as React.ComponentType<IHomePageProps>);