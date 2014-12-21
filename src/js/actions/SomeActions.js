var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/AppConstants').ActionTypes;

var FretboardActions = {
  recieveInitialState:function(payload){
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_INITIAL_STATE,
      payload: payload
    });
  },
  updateState: function (payload) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.UPDATE_STATE,
      payload: payload
    });
  }
  


};

module.exports = FretboardActions;