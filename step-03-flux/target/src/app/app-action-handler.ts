import AppDispatcher = require('./app-dispatcher');
import AppActionTypes = require('./app-action-types');

class ActionHandler {
    public doSomething():void{
        // AppDispatcher.dispatch({
            // actionType : AppActionTypes.,
            // data : {}
        // });
    }
}

var AppActionHandler: ActionHandler = new ActionHandler();

export = AppActionHandler;