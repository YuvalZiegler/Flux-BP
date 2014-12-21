var Debug = require('./Debug.react.jsx');
var SomeStore = require('../stores/SomeStore');
var React = require('react/addons');


function getStateFromStores() {
  return SomeStore.getState()
}

var App = React.createClass({

    getDebugView:function(){
        return process.env.NODE_ENV == "development" ? <Debug/> : null
    },

    getInitialState:function(){
        return null
    },

    render: function() {
        
        return ( 
          <div id="application">
            
            {this.getDebugView()}
            
         </div>
        )
    },

    componentDidMount: function () {
        SomeStore.addChangeListener(this._onChange);
    },
     
    _onChange: function () {
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        console.log("~~ App ::  _onChange ")
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        this.setState( getStateFromStores() );
    }

});

module.exports = App;