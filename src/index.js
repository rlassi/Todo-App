import { saveTodos, createTodo, getTodos } from './todos'
import { setFilters } from './filters'
import { renderTodos } from './views'

renderTodos()

document.querySelector('#filter').addEventListener('input', (function (e) {
    setFilters(e.target.value)
    renderTodos()
}))

document.querySelector('#add-todo').addEventListener('submit', function (e) {
    const text = e.target.elements.newTodo.value.trim()
    e.preventDefault()

    createTodo(text)
    saveTodos()
    renderTodos()
    e.target.elements.newTodo.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    setFilters('', e.target.checked)
    renderTodos()
})

window.addEventListener('storage', ((e) => {
    if (e.key === 'todos') {
        getTodos()
        renderTodos()
    }
}))
