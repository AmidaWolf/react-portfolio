import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {MainMenu} from './сomponents/MainMenu/MainMenu';
import {HomePage} from "./pages/Home/Home";
import {ProjectsPage} from "./pages/Projects/Projects";
import {AboutPage} from "./pages/About/About";
import {Footer} from "./сomponents/Footer/Footer";
import {SmoothScrollWithTop} from "./сomponents/SmoothScrollWithTop/SmoothScrollWithTop";


export default function App() {
    return (
        <BrowserRouter>
            <MainMenu/>
            <SmoothScrollWithTop>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/about">
                        <AboutPage/>
                    </Route>
                    <Route path="/projects">
                        <ProjectsPage/>
                    </Route>
                </Switch>
                <Footer/>
            </SmoothScrollWithTop>
        </BrowserRouter>
    );
}
