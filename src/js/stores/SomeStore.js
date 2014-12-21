var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('react/lib/Object.assign');
var CHANGE_EVENT = 'change';
var ActionTypes = require('../constants/AppConstants').ActionTypes;

var _state = {};


var SomeStore = objectAssign(EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  get: function(key) {
    return _state[key];
  },

  getState: function() {
    return _state;
  },

});


SomeStore.dispatchToken = AppDispatcher.register(function(payload) {
  
  console.log("❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤")
  console.log("❤ ︎ STORE      :: " +  payload.source + " :: " + payload.action.type + " ❤")
  console.log("❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤")
  
  var action = payload.action;
  
  switch(action.type) {

    case ActionTypes.SOME_ACTION:
      _state = objectAssign( _state, action.payload )
      SomeStore.emitChange();
      break;

    default:
      // do nothing
  }
  

});


module.exports = SomeStore;