import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material"

function NewTask({ handleSubmit }) {

    useEffect(()=>{
        console.log("NewTask Mounted")
    })

    const [task, setTask] = useState('')

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <TextField id="outlined-basic" label="New Task" value={task} onChange={(e) => { setTask(e.target.value) }} variant="outlined" />
            <Button variant="outlined" size='large' onClick={() => {handleSubmit(task);setTask('')}}>ADD</Button>
        </Box>
    )
}

export default React.memo(NewTask)