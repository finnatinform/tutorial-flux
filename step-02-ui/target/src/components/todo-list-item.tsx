import * as React from "react";

export interface ITodoListItemProps {
    Text : string ;
}
export interface ITodoListItemState {
    InEdit : boolean ;
    Text : string ;
}
export class TodoListItemState {
    InEdit : boolean = false ;
    Text : string ;

    constructor( _Text : string ){
        this.Text = _Text ;
    }
}

export class TodoListItem extends React.Component<ITodoListItemProps, ITodoListItemState> {

    constructor( _Props : ITodoListItemProps ){
        super( _Props );
        this.state = new TodoListItemState( this.props.Text );
    }

    private renderText():JSX.Element{
        let HResult : JSX.Element ;
        // if( this.state.InEdit ){
        //     HResult = <input value={this.state.Text} />
        // } else {
            HResult = <div className="todo-list-item-text">{this.state.Text}</div>
        // }
        return HResult ;
    }

    render() {
        return(
            <div className="todo-list-item">
                <div className="todo-list-item-edit">
                    <div className="todo-list-item-edit-button ion-edit" />
                    <div className="todo-list-item-edit-button ion-trash-a" />
                </div>
                {this.renderText()}
            </div>
        );
    }

}