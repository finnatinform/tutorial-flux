import * as React from "react";
import { TodoListItem } from "./todo-list-item";
import { EventSubscription } from "fbemitter";
import TodoStore = require('./../stores/store-todo');

export interface ITodoListContentProps {}
export interface ITodoListContentState {
    Items : Array<string> ;
}
export class TodoListContentState {
    Items : Array<string> = [ "Item1" , "Item2" , "Item3" ] ;
}

export class TodoListContent extends React.Component<ITodoListContentProps, ITodoListContentState> {

    private __TodoStoreListener: EventSubscription;

    constructor( _Props : ITodoListContentProps ){
        super(_Props);
        this.state = new TodoListContentState();
        this.onTodoStoreChange = this.onTodoStoreChange.bind(this);
    }

    componentDidMount():void{
        this.__TodoStoreListener = TodoStore.addListener(this.onTodoStoreChange); 
    }

    componentWillUnmount():void{
        this.__TodoStoreListener.remove();
    }

    private onTodoStoreChange():void{
        this.setState({
            Items : TodoStore.Items
        });
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