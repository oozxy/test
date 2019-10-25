import React from "react";
import Header from "../../commComponents/header"
import "./index.less"
interface IndexComProps {

}
class IndexCom extends React.Component<IndexComProps>{
  constructor(props:IndexComProps){
    super(props);
  }
  public render(){
    return (
      <div className="index_main">
        <Header name="polly"></Header>
        <div className="index_bg">
          <div className="index_mask"></div>
        </div>
        <div className="index_content">

        </div>
      </div>
    )
  }
}
export default IndexCom