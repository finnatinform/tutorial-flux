import { Store } from 'flux/utils';
import AppAction = require('./../app/app-action');
import AppDispatcher = require('./../app/app-dispatcher');
import { Dispatcher } from 'flux';

class TodoStoreStatic extends Store<AppAction>{
    private __Items : Array<string>;

    constructor( _Dispatcher : Dispatcher<AppAction> ){
        super(_Dispatcher);
        this.__Items = [] ;
    }

    private addItem( _Item : string ){
        this.__Items.push( _Item );
    }

    private deleteItem( _Item : string ){
        for( var HIndex : number = 0 ; HIndex < this.__Items.length ; HIndex++ ){
            if( this.__Items[HIndex] == _Item ){
                break ;
            }
        }
        this.__Items.splice(HIndex, 1);
    }

    private editItem( _Index : number, _NewItem : string ){
        this.__Items[ _Index ] =_NewItem ;
    }

    public get Items():Array<string>{
        return this.__Items ;
    }

    __onDispatch(_Action: AppAction) {
        // var HError: boolean = false;
        // switch (_Action.actionType) {
        //     case AppActionTypes.:

        //         break;
            
        //     default:
        //         HError = true;
        // }
        // if (!HError) {
        //     this.__emitChange();
        // }
    }
}

var TodoStore: TodoStoreStatic = new TodoStoreStatic(AppDispatcher);
export = TodoStore;