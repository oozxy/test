import React from "react";
interface HeaderProps {
  name:string
}
interface HeaderState {
  name:string
}
class Header extends React.Component<HeaderProps,HeaderState>{
  constructor(props:HeaderProps){
    super(props);
  }
  public render(){
    return (
      <div className="header_main">
        <div className="header_logo"></div>
        <div className="header_left">
          <ul>
            <li>HOME</li>
            <li>BLOG</li>
            <li>RESUME</li>
            <li>MOMENTS</li>
            <li>OTHER</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li><span className="header_login_btn">SIGN IN</span></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Header