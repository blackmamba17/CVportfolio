import React from 'react'
import Box from "@mui/material/Box";
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';
import "../assets/styles/Skills.css"

function Skills() {





    return (
        <Box id="skills" sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ pb: 2 }}>
                <h2>Skills & Technologies I know how to use</h2>
            </Box>
            <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }} >
                <Box className="icons" sx={{ width: "50%", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                    <CssIcon />
                    <HtmlIcon />
                    <img src="/CVportfolio/public/node.svg" alt="" />
                    <img src="/CVportfolio/public/mongo.svg" alt="" />
                    <img src="/CVportfolio/public/react.svg" alt="" />
                    <img src="/CVportfolio/public/ubuntu.svg" alt="" />
                    <img src="/CVportfolio/public/sql.svg" alt="" />
                    <img src="/CVportfolio/public/rest.svg" alt="" />
                </Box>
                <Box sx={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <h3>web development</h3>
                    <p>Thanks to my solo studing and my actual work, I mastered most of the latest Technologies that are required to build a modern web app.</p>
                </Box>
            </Box>
        </Box>
    )
}

export default Skills