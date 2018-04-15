var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

//var List = require('./comps/list.jsx');
//var store = require('./store-config.js');
//updated path in webpack.config.js
var List = require('List');
var store = require('store');

ReactDOM.render(
    <Provider store={store}>
        <List />
    </Provider>,
    document.getElementById("root")
);

//-- START pure function
//* NO SIDE EFFECT
//* NO ASYNC TASK
//* 1 input => 1 output
var add = (a, b) => a + b;
console.log(add(5, 6));
//-- END pure function

//-- START operator (3 dot) ...
//-- EX1:
var obj = { name: 'Steven', age: 35 }

var obj2 = {...obj, age: 34, height: 180};

obj.age = 30;
console.log(obj2);

//-- EX2:
var mang = [1, 2, 3, 5];
var arr = [7, 6, ...mang, 9, 10];
mang[0] = 1000;
console.log('Array: ', arr);
console.log('Mang: ', mang);
//-- END operator (3 dot) ...