import {Dispatcher} from 'flux';
import AppStore from '../stores/AppStore.js';
let AppDispatcher = new Dispatcher();

AppDispatcher.register(action => {
    switch (action.actionType){
        case 'addAction':
            console.log(`AppDispatcher.js addAction: ${action.text}`);
            //派发到store
            AppStore.addNewItemHandler(action.text);
            AppStore.emitChange();
        case 'addAction2':
            console.log(`AppDispatcher.js addAction2: ${action.text}`);
        //派发到store
    }
});


export default AppDispatcher;

//Dispatcher 的作用是将 Action 派发到 Store、。
// 你可以把它看作一个路由器，负责在 View 和 Store 之间，建立 Action 的正确传递路线。
// 注意，Dispatcher 只能有一个，而且是全局的。
