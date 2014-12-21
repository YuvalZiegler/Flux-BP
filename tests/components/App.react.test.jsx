var expect = require('chai').expect;

describe('App', function() {
  
  var React = require('react/addons');
  var Component = require('../../src/js/components/App.react.jsx');
  var TestUtils = React.addons.TestUtils;
  var instance;
  
  describe('Compoenent Componenet', function(){
    
    it('it should mount with no props..', function() {

      instance = TestUtils.renderIntoDocument( <Component/> );

      expect( TestUtils.isElement(<Component/>) ).to.equal( true );
      expect( TestUtils.isCompositeComponent(instance) ).to.equal( true );
      expect( instance.isMounted() ).to.equal( true );
    
    });

  });


});

