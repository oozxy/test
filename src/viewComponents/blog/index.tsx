import React from "react";
import Header from "../../commComponents/header"
import Three3D from "../../commComponents/animation/three3D"
import "./index.less"
interface BlogComProps {

}
class BlogCom extends React.Component<BlogComProps>{
  constructor(props:BlogComProps){
    super(props);
  }
  public render(){
    return (
      <div className="blog_main">
        <Header name="polly"></Header>
        <div className="blog_content top_padding">
          <Three3D />
        </div>
      </div>
    )
  }
}
export default BlogCom