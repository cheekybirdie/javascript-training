/**
 * Created by Cindy Edwards on 5/25/2015.
 */

function setRoutes() {
    // render the todos template when the '/' route is detected
    this.resource('todos', { path: '/' });
}

Todos.Router.map(setRoutes);