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
        
      </div>
    )
  }
}
export default Trans3D