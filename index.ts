/**
 * installation command -: npm install -g typescript ts-node
 *
 */

// typescript = Javascript + A type system ()

// typescript help us catch errors during development time

// commands
/**
 *
 *  1. tsc indexx.ts
 *  2. node index.js
 *
 *  combine both commands into one
 *
 *  ts-node index.ts
 */

import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  // interface in typescript used to define the structure of object
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`${id} - ${title} - ${completed}`);
};
