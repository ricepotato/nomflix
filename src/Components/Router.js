import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import Detail from "Routes/Detail";
import Tv from "Routes/Tv";
import Search from "Routes/Search";
import Header from "Components/Header";

export default () => (
  <Router>
    <>
      <Header></Header>
      <Route path="/" exact component={Home} />
      <Route path="/detail" exact component={Detail} />
      <Route path="/search" exact component={Search} />
      <Route path="/tv" exact component={Tv} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/show/:id" component={Detail} />
    </>
  </Router>
);
