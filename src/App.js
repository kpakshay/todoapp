import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Table,Button, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper } from "@mui/material";
import NewTask from './newtask';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', complete: false },
    { id: 2, text: 'Master Memoizing', complete: true },
    { id: 3, text: 'Gym', complete: false }
  ])

  let [count, setCount] = useState(0)

  const handleSubmit = (task) => {
    console.log("g", task)
    setTodos([
      ...todos,
      { id: todos.length + 1, text: `${task}`, complete: false }
    ])
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "lightblue",
        p: 2,
        display: "flex",
        flexDirection: "column", // stack rows vertically
        gap: 2,                   // space between each row
      }}
    >

      <NewTask handleSubmit={handleSubmit}/>

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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Typography variant="h5" color='grey' component="h2" sx={{ m: 0 }}>
          Counter
        </Typography>

        {count} <Button onClick={()=>{setCount(count+1)}}>Increment</Button>
        <Button onClick={()=>{setCount(--count)}}>Decrement</Button>
      </div>
    </Box>
  )
}
export default App