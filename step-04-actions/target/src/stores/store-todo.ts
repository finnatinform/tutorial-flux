import { Store } from 'flux/utils';
import AppAction = require('./../app/app-action');
import AppDispatcher = require('./../app/app-dispatcher');
import { Dispatcher } from 'flux';
import AppActionTypes = require('./../app/app-action-types');

class TodoStoreStatic extends Store<AppAction>{
    private __Items: Array<string>;

    constructor(_Dispatcher: Dispatcher<AppAction>) {
        super(_Dispatcher);
        this.__Items = [];
    }
    public get Items(): Array<string> {
        return this.__Items;
    }
    private addItem(_Item: string) {
        this.__Items.push(_Item);
    }

    private deleteItem(_Item: string) {
        for (var HIndex: number = 0; HIndex < this.__Items.length; HIndex++) {
            if (this.__Items[HIndex] == _Item) {
                break;
            }
        }
        this.__Items.splice(HIndex, 1);
    }

    __onDispatch(_Action: AppAction) {
        var HError: boolean = false;
        switch (_Action.actionType) {
            case AppActionTypes.AT_ITEM_ADDED:
                this.addItem(_Action.data.item);
                break;
            case AppActionTypes.AT_ITEM_DELETED:
                this.deleteItem(_Action.data.item);
                break;
            default:
                HError = true;
        }
        if (!HError) {
            this.__emitChange();
        }
    }
}

var TodoStore: TodoStoreStatic = new TodoStoreStatic(AppDispatcher);
export = TodoStore;