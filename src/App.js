import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Table, Button, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper } from "@mui/material";
import NewTask from './newtask';
import Counter from './counter';

function App() {

  useEffect(() => console.log("App Mounted"))

  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', complete: false },
    { id: 2, text: 'Master Memoizing', complete: true },
    { id: 3, text: 'Gym', complete: false }
  ])

  const handleComplete = (todo) => {
    setTodos(prev =>
      prev.map(t =>
        t.id === todo.id ? { ...t, complete: true } : t
      )
    )
  }

  const handleDelete = (todo) => {
    setTodos(prev =>
      prev.filter(t => t.id !== todo.id)
    )
  }

  const handleSubmit = useCallback((task) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, text: `${task}`, complete: false }
    ])
  }, [todos])

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "lightblue",
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >

      <NewTask handleSubmit={handleSubmit} />

      <Typography variant="h5" color='grey' component="h2" sx={{ m: 0 }}>
        Your Tasks
      </Typography>

      <TableContainer component={Paper} >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>TASK</TableCell>
              <TableCell>PROGRESS</TableCell>
              <TableCell>UPDATE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo) => (
              <TableRow
                key={todo.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {todo.id}
                </TableCell>
                <TableCell>{todo.text}</TableCell>
                <TableCell>{todo.complete ? "Completed" : "YTS"}</TableCell>
                <TableCell>
                  {todo.complete ?
                    <Button sx={{ color: "red" }} onClick={() => handleDelete(todo)}>
                      Delete
                    </Button> :
                    <Button sx={{ color: "green" }} onClick={() => handleComplete(todo)}>
                      Complete
                    </Button>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Counter />

    </Box>
  )
}
export default App