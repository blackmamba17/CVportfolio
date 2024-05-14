import React from 'react'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


function Hero() {
    return (
        <Box sx={{ width: { md: 900 } }}>
            <Paper elevation={20} sx={{ display: "flex", p: 5 }}>
                <Box sx={{ width: "60%", display: "flex", flexDirection: "column" }}>
                    <Box sx={{ p: 2 }}>
                        <h1>The only constant in the technology industry is change.</h1>
                        <p>Hi! I'm Gabriele Torrisi, welcome to my website. Since in the very first years of my life, when other boys were playing with sticks and stones, I was already having a PC in my hand deploying retro server of an old popular chat game. Now, at 22 years old, I would like to tell you my path in IT not with words, but with my projects. So..</p>
                        <Button variant="outlined" color="secondary" size='large'>test</Button>
                    </Box>
                </Box>
                <Box sx={{ width: "40%" }}>
                    <Avatar alt="profile picture of my self" src='/public/proPic.jpg' sx={{
                        width: 300, height: 300, boxShadow: "0px 10px 13px -7px #000000"
                    }} />
                </Box>
            </Paper>
        </Box>
    )
}

export default Hero