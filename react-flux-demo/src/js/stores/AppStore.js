import {EventEmitter} from 'events';
import assign from 'object-assign';

let AppStore = assign({}, EventEmitter.prototype, {
    lists: [],
    getAll: function(){
        return this.lists;
    },
    addNewItemHandler: function(text){
        this.lists.push(text);
    },
    emitChange: function(){
        this.emit('change');
    },
    addChangeListener: function(callback){
        this.on('change', callback);
    },
    removeChangeListener: function(callback){
        this.removeListener('change', callback);
    }
});

export default AppStore;