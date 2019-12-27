import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./pages/home"
import userPage from "./pages/users"

export default function(){
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/users" component={userPage}/>

        </Switch>
    )
}