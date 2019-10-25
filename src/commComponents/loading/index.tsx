import React from "react";
interface LoadingProps {
  name:string
}
interface LoadingState {
  name:string
}
class Loading extends React.Component<LoadingProps,LoadingState>{
  constructor(props:LoadingProps){
    super(props);
  }
  public render(){
    return (
      <div className="loading_main">
        <div className="loading_logo"></div>
        <div className="loading_left">
          <ul>
            <li>HOME</li>
            <li>BLOG</li>
            <li>RESUME</li>
            <li>MOMENTS</li>
            <li>OTHER</li>
          </ul>
        </div>
        <div className="loading_right">

        </div>
      </div>
    )
  }
}