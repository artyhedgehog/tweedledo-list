/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/

/// <reference path="./types/interfaces.d.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";
import { TodoModel } from "./models/todoModel";
import { TodoApp } from "./components/TodoApp"

var model = new TodoModel('react-todos');

function render() {
  ReactDOM.render(
    <TodoApp model={model}/>,
    document.getElementsByClassName('todoapp')[0]
  );
}

model.subscribe(render);
render();
