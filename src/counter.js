import React, { useEffect,useState } from "react";
import { Button, Typography,Box } from "@mui/material";

const Counter = () => {
    useEffect(()=>{console.log("Counter Mounted")})

    let [count, setCount] = useState(0)

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h5" color='grey' component="h2" sx={{ m: 0 }}>
                Counter
            </Typography>

            {count}<Button onClick={() => { setCount(count + 1) }}>Increment</Button>
            <Button onClick={() => { setCount(--count) }}>Decrement</Button>
        </Box>
    )
}

export default React.memo(Counter)