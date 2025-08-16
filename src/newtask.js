import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material"

export default function NewTask({ handleSubmit }) {

    const [task, setTask] = useState('')

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h5" color='grey' component="h2" sx={{ m: 0 }}>
                YOUR NEW TASK
            </Typography>

            <TextField id="outlined-basic" label="New Task" value={task} onChange={(e) => { setTask(e.target.value) }} variant="outlined" />
            <Button variant="outlined" size='large' onClick={() => handleSubmit(task)}>ADD</Button>
        </Box>
    )
}