import React from 'react'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Avatar from '@mui/material/Avatar';


function Hero() {
    return (
        <Box sx={{ width: { md: 900 } }}>
            <Paper elevation={20} sx={{ display: "flex", p: 5 }}>
                <Box sx={{ width: "60%", display: "flex", flexDirection: "column" }}>
                    <Box sx={{ p: 2 }}>
                        <h1>The only constant in the technology industry is change.</h1>
                        <p>Hi! I'm Gabriele Torrisi, welcome to my website</p>
                    </Box>
                </Box>
                <Box sx={{ width: "40%" }}>
                    <Avatar alt="profile picture of my self" />
                </Box>
            </Paper>
        </Box>
    )
}

export default Hero