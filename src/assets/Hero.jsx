import React from 'react'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "../assets/styles/Hero.css"

function Hero() {
    return (
        <div id="home" style={{ display: " flex", flexWrap: "no-wrap" }} >
            <Box className="motto" sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ p: 2 }}>
                    <h1 style={{ textAlign: "left" }}>The only constant in the technology industry is change.</h1>
                    <p>Hi! I'm Gabriele Torrisi and since in the very first years of my life, when other boys were playing with sticks and stones, I was already having a PC in my hand deploying retro server of an old popular chat game. Now, at 22 years old, I would like to tell you my path in IT not with words, but with my projects. So..</p>
                    <Button className='buttonHover' variant="outlined" color="secondary" size='large' endIcon={<SendIcon />}>CHECK IT OUT</Button>
                </Box>
            </Box>
            <Box className="proPicBox" sx={{ display: "flex", m: 5 }}>
                <Avatar alt="profile picture of my self" src='' sx={{
                    width: "100%",
                    height: "100%",
                    boxShadow: "0px 10px 13px -7px #000000", border: "4px solid #9c27b0"
                }} className='proPic' />
            </Box>
        </div>
    )
}

export default Hero