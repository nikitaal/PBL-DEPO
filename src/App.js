import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {PrivateRoute, ScrollToTop} from "./helpers";
// routes
import * as ROUTES from './constants/routes';
import routes from "./constants";

// my custom components
import {NavBarContainer, Footer, Particles, PageNotFound} from "./components";
import useStartup from "./hooks/useStartup";

const routeComponents = routes.map(({path, component}, key) => {
    if (path === ROUTES.USER) {
        return <PrivateRoute exact path={path} component={component} key={key}/>
    }
    return <Route exact path={path} component={component} key={key}/>
});


export default function App() {
    useStartup();
    return (
        <>
            <Particles/>
            <NavBarContainer/>
            <ScrollToTop/>
            <Switch>
                {routeComponents}
                <Route render={() => <PageNotFound/>}/>
            </Switch>
            <Footer/>
        </>
    );
}