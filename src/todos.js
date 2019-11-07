// Setup the empty todos array

// loadTodos
// Arguments: none
// Return value: none

// saveTodos
// Arguments: none
// Return value: none

// getTodos
// Arguments: none
// Return value: todos array

// createTodo
// Arguments: todo text
// Return value: none

// removeTodo
// Arguments: id of todo to remove
// Return value: none

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none

// Make sure to call loadTodos and setup the exports
import uuidv4 from 'uuid/v4'
import { renderTodos } from './views'

let todos = []

const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

const saveTodos = () => localStorage.setItem('todos', JSON.stringify(todos))

const getTodos = () => todos = loadTodos()

const createTodo = (text) => {
    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text: text,
            completed: false
        })
    } else {
        alert('You must first enter a todo!')
    }
}

const removeTodo = (todoID) => {
    const todoIndex = todos.findIndex((todo) => {
        return todoID === todo.id
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const toggleTodo = (todoID) => {
    const todo = todos.find((todo) => {
        return todoID === todo.id
    })
    if (todo) {
        todo.completed = !todo.completed
    }
}

todos = loadTodos()


export { toggleTodo, loadTodos, saveTodos, createTodo, removeTodo, getTodos }