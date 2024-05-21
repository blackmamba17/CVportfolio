import React from 'react'
import Box from "@mui/material/Box";
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';
import "../assets/styles/Skills.css"
import Node from "/node.svg";
import Mongo from "/mongo.svg";
import ReactLogo from "/react.svg";
import Ubuntu from "/ubuntu.svg";
import Sql from "/sql.svg";
import Rest from "/rest.svg";


function Skills() {





    return (
        <Box id="skills" sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ pb: 2 }}>
                <h2>Skills & Technologies I know how to use</h2>
            </Box>
            <Box id="skillsBox" sx={{ display: "flex", width: "100%", justifyContent: "center" }} >
                <Box className="icons" sx={{ width: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                    <CssIcon />
                    <HtmlIcon />
                    <img src={Node} alt="" />
                    <img src={Mongo} alt="" />
                    <img src={ReactLogo} alt="" />
                    <img src={Ubuntu} alt="" />
                    <img src={Sql} alt="" />
                    <img src={Rest} alt="" />
                </Box>
                <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <h3>web development</h3>
                    <p>Thanks to my solo studing and my actual work, I mastered most of the latest Technologies that are required to build a modern web app.</p>
                </Box>
            </Box>
        </Box>
    )
}

export default Skills