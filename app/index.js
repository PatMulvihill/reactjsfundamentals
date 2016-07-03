/* FIRST:
    Focused
    Independent
    Reusable
    Small
    Testable
*/
// fn(d) = v

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');


ReactDOM.render(
    routes,
    document.getElementById('app')
);

// Pure Functions
// Evlautes the same result given the same arguments
// Doesn't depend on and doesn't modify the states of variables out of its scope
// No side effects (mutations, async reqs)