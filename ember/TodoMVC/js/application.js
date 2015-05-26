/**
 * Created by Cindy Edwards on 5/25/2015.
 */

window.Todos = Ember.Application.create();

// set ApplicationAdapter to an extension of the DS.FixtureAdapter to use sample data
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();