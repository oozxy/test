import React from "react";
import "./index.less";
import { Link } from 'react-router-dom';
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
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/blog">BLOG</Link></li>
            <li><Link to="/blog">RESUME</Link></li>
            <li><Link to="/moments">MOMENTS</Link></li>
            <li><Link to="/moments">OTHER</Link></li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li><span className="header_login_btn">SIGN IN</span></li>
            <li><span className="header_register_btn">SIGN UP</span></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Header