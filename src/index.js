import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

/* mport { Todo } from './classes/todo.class';
import { TodoList } from './classes/todo-list.class'; */


export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml (todo) );

/* const tarea = new Todo( 'anda a la cancha bobo');
todoList.nuevoTodo( tarea );


console.log (todoList);

tarea.completado = true

crearTodoHtml ( tarea );

localStorage.setItem('mi-key', ) */
