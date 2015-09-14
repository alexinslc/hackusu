if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault();

  // Page Title
  var title = "hackUSU";

  // Iron Router Configuration
  Router.configure({
    layoutTemplate: 'ApplicationLayout'
  });

  Router.route('/', function () {
    this.render('Home');
  });

  Router.route('/sponsors', function () {
    this.render('Sponsors');
  });

  Router.route('/about', function () {
    this.render('About');
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
