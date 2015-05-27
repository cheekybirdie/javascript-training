/**
 * Created by Cindy Edwards on 5/26/2015.
 */

Todos.TodosController = Ember.ArrayController.extend({
    actions: {
        clearCompleted: function() {
            var completed = this.filterBy('isCompleted', true);
            completed.invoke('deleteRecord');
            completed.invoke('save');
        },

        createTodo: function() {
            // Get the todo title set by the "New Todo" text field
            var title = this.get('newTitle');
            if (!title.trim()) { return; }

            // Create the new Todo model
            var todo = this.store.createRecord('todo', {
                title: title,
                isCompleted: false
            });

            // Clear the "New Todo" text field
            this.set('newTitle', '');

            // Save the new model
            todo.save();
        }
    },

    allAreDone: function(key, value) {
        if (value === undefined) {
            // getter
            return !!this.get('length') && this.isEvery('isCompleted', true);
        } else {
            // setter
            this.setEach('isCompleted', value);
            this.invoke('save');
            return value;
        }
    }.property('@each.isCompleted'),

    completed: function() {
        return this.filterBy('isCompleted', true).get('length');
    }.property('@each.isCompleted'),

    hasCompleted: function() {
        return this.get('completed') > 0;
    }.property('completed'),

    inflection: function() {
        var remaining = this.get('remaining');
        return remaining === 1 ? 'item' : 'items';
    }.property('remaining'),

    remaining: function() {
        return this.filterBy('isCompleted', false).get('length');
    }.property('@each.isCompleted')
});
