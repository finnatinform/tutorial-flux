import * as React from "react";
import AppActionHandler = require('./../app/app-action-handler');

export interface ITodoListItemProps {
    Text: string;
}

export interface ITodoListItemState { }

export class TodoListItemState { }

export class TodoListItem extends React.Component<ITodoListItemProps, ITodoListItemState> {

    constructor(_Props: ITodoListItemProps) {
        super(_Props);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onEditItem = this.onEditItem.bind(this);
        this.onItemChange = this.onItemChange.bind(this);
        this.onSaveItem = this.onSaveItem.bind(this);
    }

    private renderText(): JSX.Element {
        return <div className="todo-list-item-text">{this.props.Text}</div>;
    }

    private onDeleteItem(): void {
        AppActionHandler.onItemDeleted(this.props.Text);
    }

    private renderEditItems(): Array<JSX.Element> {
        let HResult: Array<JSX.Element> = [];
        HResult.push(<div className="todo-list-item-edit-button ion-trash-a" onClick={this.onDeleteItem} />);
        return HResult;
    }

    render() {
        return (
            <div className="todo-list-item">
                <div className="todo-list-item-edit">
                    {this.renderEditItems()}
                </div>
                {this.renderText()}
            </div>
        );
    }

}