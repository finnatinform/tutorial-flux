import * as React from "react";

import {TodoList} from "./todo-list";

export interface IApplicationProps {}
export interface IApplicationState {}
export class ApplicationState {}

export class Application extends React.Component<IApplicationProps, IApplicationState> {
    render() {
        return(
            <div className="application">
                <TodoList />
            </div>
        );
    }
}