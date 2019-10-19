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
      <input type="text" className="username"/>
      <input type="text" className="username"/>
      <div className="home_btn">
        <span className="add_btn">添加信息</span>
        <span className="delete_btn">删除信息</span>
      </div>
    </div>
  )
}

export default Index