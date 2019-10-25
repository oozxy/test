import React from "react";
interface DialogProps {
  name:string
}
interface DialogState {
  name:string
}
class Dialog extends React.Component<DialogProps,DialogState>{
  constructor(props:DialogProps){
    super(props);
  }
  public render(){
    return (
      <div className="dialog_main">
        <div className="dialog_model"></div>
      </div>
    )
  }
}