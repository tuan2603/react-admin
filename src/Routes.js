import React from "react";
import {
   Route, Switch
} from "react-router-dom";
import Home from './components/home/Home';
import PageLogin from './components/user/PageLogin';
const Routes = () => (
    <Switch>
        <Route exact path='/' strict  component={Home}/>
        <Route exact path='/page-login.html' strict  component={PageLogin}/>
        <Route render = { function() {
            return <h1>Not Found</h1>;
        }} />
    </Switch>
);


export default Routes;
