import AppDispatcher = require('./app-dispatcher');
import AppActionTypes = require('./app-action-types');

class ActionHandler {

    public onAddItemRequested():void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_ADD_REQUESTED,
            data : {}
        });
    }

    public onAddItemAborted():void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_ADD_REQUESTED,
            data : {}
        });
    }

    public onItemAdded( _Item : string ):void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_ADDED,
            data : {
                item : _Item.trim()
            }
        });
    }
    public onItemDeleted( _Item : string ):void{
        AppDispatcher.dispatch({
            actionType : AppActionTypes.AT_ITEM_DELETED,
            data : {
                item : _Item
            }
        });
    }

}

var AppActionHandler: ActionHandler = new ActionHandler();

export = AppActionHandler;