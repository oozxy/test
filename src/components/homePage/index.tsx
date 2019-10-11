import React from "react";

export interface IHomePageState {
  name: string
}
class HomeComponent extends React.Component<{}, IHomePageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
    };
  }
  public setName = () => {
    this.setState({
      name:"polly"
    })
  }
  public render(){
    const { name } = this.state;
    return (
      <div>
         <div onClick={this.setName}> set name </div>
         <div>{name}</div>
      </div>
    )
  }
  
}