import React from "react";
import Three from "three";
import "./index.less";
interface Three3DProps {
}
interface Three3DState {
}
class Three3D extends React.Component<Three3DProps,Three3DState>{
  constructor(props:Three3DProps){
    super(props);
  }
  initThree(){
    
  }
  public render(){
    return (
      <div className="three3D_main">

      </div>
    )
  }
}
export default Three3D