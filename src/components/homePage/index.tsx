import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from "redux";
import { Message } from "../../store/common/models"
import { sendMessage, deleteMessage} from "../../store/common/actions"
export interface IHomePageProps {
  name: string
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
    console.log(this.state)
    const { name } = this.state;
    return (
      <div>
         <div onClick={this.setName}> set name </div>
         <div>{name}</div>
      </div>
    )
  }
}
const mapStateToProps = (state: any, ownProps: IHomePageProps)=>{
  console.log(state.chat.messages)
  return {
    name: ownProps.name,
    messages: state.chat.messages
  }
}
const mapDispatchToProps = (dispatch: Dispatch) =>{
  return {
    delete:bindActionCreators(deleteMessage,dispatch),
    send:bindActionCreators(sendMessage,dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);