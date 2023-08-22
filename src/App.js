import React, { useState, useEffect } from "react";
import { HashRouter, Link, Redirect , Route, Switch } from "react-router-dom";
import sesion from "./pages/sesion.jsx";
import principal from "./pages/principal.jsx";
//import folio from "./pages/folio";



function App() {
  return (
    <div className="App">
        <HashRouter>
          <Switch>
              <Route exact path="/" render={({ location }) => <Redirect  to={"/Sesion"} />} />
              <Route path="/sesion" component={sesion} />
              <Route path="/principal" component={principal} />
              {//<Route path="/folio" component={folio} />
}
          </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
