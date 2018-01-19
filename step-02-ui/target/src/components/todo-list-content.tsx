import * as React from "react";
import { TodoListItem } from "./todo-list-item";

export interface ITodoListContentProps {}
export interface ITodoListContentState {
    Items : Array<string> ;
}
export class TodoListContentState {
    Items : Array<string> = [ "Item1" , "Item2" , "Item3" ] ;
}

export class TodoListContent extends React.Component<ITodoListContentProps, ITodoListContentState> {

    constructor( _Props : ITodoListContentProps ){
        super(_Props);
        this.state = new TodoListContentState();
    }

    private renderItems():Array<JSX.Element>{
        let HResult : Array<JSX.Element> = [] ;

        for( let HIndex : number = 0 ; HIndex < this.state.Items.length; HIndex++ ){
            HResult.push( <TodoListItem Text={this.state.Items[HIndex]} /> );
        }

        return HResult ;
    }

    render() {
        return(
            <div className="todo-list-content">
                {this.renderItems()}
            </div>
        );
    }
}