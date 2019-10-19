import React from "react";
import { connect } from 'react-redux'
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
export default HomeComponent