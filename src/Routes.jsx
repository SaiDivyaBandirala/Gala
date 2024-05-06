import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index";
import GamesList from "./pages/GamesList/index";
import SevensGame from "./pages/SevensGame/index";
import { CallbackPage } from "./pages/Dashboard/subs/callback-page";

function Routes() {
    return (
        <Switch>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="callback" element={<CallbackPage />} />
            <Route path="games" element={<GamesList />} />
            <Route path="sevens" element={<SevensGame />} />
        </Switch>
    );
}

export default Routes;
