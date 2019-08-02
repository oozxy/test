import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "../views/index"
import Technology from "../views/technology"
import LifeVlog from "../views/lifeVlog"
import NotFound from "../views/notFound"
export const RouterCom: React.SFC = () =>{
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/technology" component={Technology}/>
        <Route path="/lifeVlog" component={LifeVlog}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  )
}
