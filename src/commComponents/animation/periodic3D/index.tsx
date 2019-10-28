import React from "react";
import "./index.less";
interface Trans3DProps {
}
interface Trans3DState {
  name:string
}
class Trans3D extends React.Component<Trans3DProps,Trans3DState>{
  constructor(props:Trans3DProps){
    super(props);
  }
  public render(){
    return (
      <div className="trans3D_main">
        <div className="trans3D_content"></div>
        <div className="trans3D_select_nav">
          <button className="table">TABLE</button>
          <button className="sphere">SPHERE</button>
          <button className="sphere2">SPHERE2</button>
          <button className="plane">PLANE</button>
          <button className="helix">HELIX</button>
          <button className="grid">GRID</button>
        </div>
      </div>
    )
  }
}
export default Trans3D