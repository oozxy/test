import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from "redux";
import { Message } from "../../store/common/models"
import { sendMessage, deleteMessage} from "../../store/common/actions"
interface IHomePageProps {
  name: string,
  messages: Message[],
  send: typeof sendMessage,
  delete: typeof deleteMessage
}
interface IHomePageState {
  name: string,
  userName: string,
  message: string
}
 class HomeComponent extends React.Component<IHomePageProps,IHomePageState> {
  constructor(props: IHomePageProps) {
    super(props);
    this.state = {
      name: props.name,
      userName: "",
      message: ""
    };
  }
  public setName = () => {
    this.setState({
      name:"polly111"
    })
  }
  handleUserChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({userName:e.target.value});
    // this.setState("userName",e.target.value)
  }
  handleMsgChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({message:e.target.value});
  }
  handleAddClick(){
    const timestamp:number = (new Date()).getTime();
    const playLoad:Message = {
      user:this.state.userName,
      message:this.state.message,
      timestamp:timestamp
    }
    this.props.send(playLoad)
  }
  handlDeleteClick(){
    const timestamp:number = 1;
    this.props.delete(timestamp);
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
        <input type="text" className="username" value={this.state.userName} onChange={this.handleUserChange.bind(this)} placeholder="请输入用户名"/>
        <input type="text" className="message" value={this.state.message} onChange={this.handleMsgChange.bind(this)} placeholder="请输入内容"/>
        <div className="home_btn">
          <span className="add_btn" onClick={this.handleAddClick.bind(this)}>添加信息</span>
          <span className="delete_btn" onClick={this.handlDeleteClick.bind(this)}>删除信息</span>
        </div>
        <div className="info_btn">获取异步信息</div>
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
    // send:(message:Message)=>dispatch(sendMessage(message))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent as React.ComponentType<IHomePageProps>);