import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

var Todos = new Mongo.Collection('todos');1
