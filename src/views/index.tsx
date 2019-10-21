import React from 'react';
import HomePage from "../components/homePage/index";

const Index: React.FC = () => {
  return (
    <div className="home">首页 <span>123123</span>
      <div className="banner">
        <p className="title">
        </p>
      </div>
      <ul>
        <li>123</li>
      </ul>
      <HomePage name="alan"></HomePage>     
    </div>
  )
}

export default Index