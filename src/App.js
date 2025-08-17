import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Box, Typography, Table, Button, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper, InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import NewTask from './Components/newtask';
import Counter from './Components/counter';

function App() {

  useEffect(() => console.log("App Mounted"))

  const nextId = useRef(4)

  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', complete: false },
    { id: 2, text: 'Master Memoizing', complete: true },
    { id: 3, text: 'Gym', complete: false }
  ])

  const [filter, setFilter] = useState('all')

  const filteredTodos = useMemo(() => {
  return todos.filter(todo => {
    if (filter === "completed") return todo.complete;
    else if (filter === "yts") return !todo.complete;
    else return true;
  });
}, [todos, filter]);

  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  const handleComplete = (todo) => {
    console.log(filteredTodos, "filteredtodo")
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
    if(task){
    setTodos([
      ...todos,
      { id: nextId.current, text: `${task}`, complete: false }
    ])
    nextId.current+=1
  } else { alert("Task shouldnt be empty")}
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

      <Typography variant="h3" color='black' sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} component="h2">TODO APP</Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>

        <NewTask handleSubmit={handleSubmit} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

          <FormControl >
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter}
              label="Age"
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"completed"}>Completed</MenuItem>
              <MenuItem value={"yts"}>YTS</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

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
            {filteredTodos.map((todo) => (
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