import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import News from "./components/news/news";
import Auth from "./components/auth/auth";
import Header from "./components/layout/header/header";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={News} />
              <Route path="/Auth" component={Auth} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
