angular.module('todoApp', ['ngSentry'])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn AngularJS'},
      {text:'build an AngularJS app'}];

    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText});
      todoList.todoText = '';
      var obj = {};
      obj.invalidFunction();
      throw "Test Sentry Integration!";
    };
  });


/*
Copyright 2020 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/