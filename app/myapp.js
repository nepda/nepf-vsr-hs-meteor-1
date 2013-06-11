

if (Meteor.isClient) {

    Session.set('clicks', 0);

  Template.hello.greeting = function () {
    return "Welcome to myapp.";
  };

  Template.hello.presscount = function () {
    return Session.get('clicks');
  }

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
        Session.set('clicks', Session.get('clicks')+1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
