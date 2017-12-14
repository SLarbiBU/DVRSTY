if(Meteor.isClient){
    // client code goes here
}

if(Meteor.isServer){
    // server code goes here
}



Router.route('/register');
Router.route('/login');
Router.route('/distribution');
Router.route('/partyCreation');
Router.route('/who');
Router.route('/contribute');
Router.route('/waiting');
Router.route('/calculate');
Router.route('display')


Router.route('/', {
    name: 'home',
    template: 'home'
});

Router.configure({
    layoutTemplate: 'main'
});

Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
    email: email,
    password: password,
    profile: {
            secretCode: 0,
        }
}, function(error){
    if(error){
        console.log(error.reason); // Output error if registration fails
    } else {
        Router.go("partyCreation"); // Redirect user if registration succeeds
    }
});
    }
    
});

Template.home.events({
    'click #getStarted': function(event){
        event.preventDefault();
        Router.go('who');
    }
})
Template.navigation.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
    }
});

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
    if(error){
        console.log(error.reason);
    } else {
        Router.go("distribution");
    }
});
    }
});
import { Random } from 'meteor/random';
var secretS = Random.secret([8]);
Template.partyCreation.events({
    'submit form': function(event){
        event.preventDefault();
        document.getElementById('randCode').innerHTML = secretS;
    },
    'click #generate': function(){
        Router.go("distribution");
        
    }
});

Template.who.events({
    'submit form': function(event){
        event.preventDefault();
        var creatchk = document.getElementById("create").checked;
        var contrchk = document.getElementById("contribute").checked;
        if(creatchk == true){
            Router.go('register');
        }
        if(contrchk == true){
            Router.go('contribute');
        }

    }
});

Template.contribute.events({
    'submit form': function(event){
        event.preventDefault();
        Router.go('calculate');
    }
});

Template.calculate.events({
    'click #submit': function(event){
        event.preventDefault();
        Router.go('distribution');
    }
    
});




