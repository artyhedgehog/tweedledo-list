/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/

/// <reference path="./types/interfaces.d.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";
import { TodoApp } from "./components/TodoApp"


function render() {
  ReactDOM.render(
    <TodoApp />,
    document.getElementsByClassName('todoapp')[0]
  );
}

render();
