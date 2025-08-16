import React, { useEffect, useMemo } from 'react';

function TodoList({ todos, filter, onToggle }) {
    useEffect(()=>console.log("Mount ToDoLsit,2"))
  const filteredTodos = useMemo(() => {
    console.log('Filtering todos...,2');
    if (filter === 'completed') return todos.filter((t) => t.completed);
    if (filter === 'active') return todos.filter((t) => !t.completed);
    return todos;
  }, [todos, filter]);

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            {todo.text}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(TodoList);
