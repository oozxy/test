
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "@/views/index"
import Technology from "@/views/technology"
import LifeVlog from "../views/lifeVlog"
export const RouterCom = ()=>{
  return (
    <Router>
      <Route path="/" component={Index}/>
      <Route path="/technology" component={Technology}/>
      <Route path="/lifeVlog" component={LifeVlog}/>
    </Router>
  )
}
