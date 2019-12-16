import React from "react";
class SVGCom extends React.Component{
  public render() {
    return (
      <div className="svg_main">
        <div className="svg_test1">
          <svg>
            <rect x="10" y="10" height="100" width="100" style={{ fill: 'purple', strokeWidth: 1, stroke: 'rgb(0,0,0)' }}></rect>
          </svg>
        </div>
      </div>
    )
  }
}
export default SVGCom
//