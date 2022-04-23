import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";



import NavBar from "./componentes/Navbar";
import Principal from "./pages/Principal";
import Aside from "./componentes/Aside";
import Sobre from "./pages/Sobre";
import Footer from "./componentes/Footer";
import Contato from "./pages/Contato";

function App() {
    return (
        <BrowserRouter>
            <div id="container">
                <NavBar />
                <Aside />
                 <Switch>
                    <Route path="/" exact>
                        <Principal />
                    </Route>
                    <Route path="/sobre">
                        <Sobre />
                    </Route>
                    <Route path="/contato">
                        <Contato />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    
    );
}

export default App;