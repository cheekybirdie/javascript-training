/**
 * Created by Cindy Edwards on 5/25/2015.
 */

function setRoutes() {
    // render the todos template when the '/' route is detected
    this.resource('todos', { path: '/' }, function () {
        // additional child routes will go here later
        this.route('active');
        this.route('completed');
    });
}

Todos.Router.map(setRoutes);

Todos.TodosRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('todo');
    }
});

Todos.TodosIndexRoute = Ember.Route.extend({
    model: function() {
        return this.modelFor('todos');
    }
});

Todos.TodosActiveRoute = Ember.Route.extend({
    model: function(){
        return this.store.filter('todo', function(todo) {
            return !todo.get('isCompleted');
        });
    },
    renderTemplate: function(controller) {
        this.render('todos/index', {controller: controller});
    }
});

Todos.TodosCompletedRoute = Ember.Route.extend({
    model: function(){
        return this.store.filter('todo', function(todo) {
            return todo.get('isCompleted');
        });
    },
    renderTemplate: function(controller) {
        this.render('todos/index', {controller: controller});
    }
});