import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {MainMenu} from './сomponents/MainMenu/MainMenu';
import {HomePage} from "./pages/Home/Home";
import {ProjectsPage} from "./pages/Projects/Projects";
import {AboutPage} from "./pages/About/About";
import {ContactsPage} from "./pages/Contacts/Contacts";
import {Footer} from "./сomponents/Footer/Footer";


export default function App() {
    return (
        <BrowserRouter>
            <MainMenu/>
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
                <Route path="/contacts">
                    <ContactsPage/>
                </Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}
