import React from "react";
import * as THREE from 'three';
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
    console.log("123")
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild(renderer.domElement);
  }
  componentDidMount(){
    console.log("1")
    this.initThree();
  }
  public render(){
    return (
      <div className="three3D_main">
        
      </div>
    )
  }
}
export default Three3D