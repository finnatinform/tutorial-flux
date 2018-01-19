import * as React from "react";

export interface ITodoListHeaderProps {
    name : string ;
}
export interface ITodoListHeaderState {}
export class TodoListHeaderState {}

export class TodoListHeader extends React.Component<ITodoListHeaderProps, ITodoListHeaderState> {
    render() {
        return(
            <div className="todo-list-header">
                {this.props.name}'s Todo Liste
            </div>
        );
    }
}