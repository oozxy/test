import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "../views/index"
import Moments from "../views/moments"
import Blog from "../views/blog"
import NotFound from "../views/notFound"
export const RouterCom: React.SFC = () =>{
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/moments" component={Moments}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  )
}
