import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "../assets/styles/NavBar.css";
/* import Link from '@mui/material/Link';
 */import Divider from '@mui/material/Divider';
import { Link } from 'react-scroll';

function NavBar(props) {

    const navbarItems = ["home", "about", "skills", "careers"]



    return (

        <AppBar position="sticky" sx={{ background: "white", color: "#9c27b0 ", width: "100%", top: 0 }}>
            <Toolbar sx={{ display: "flex" }}>

                {/* <IconButton

                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, visibility: "hidden" }}
                >
                    <MenuIcon />
                </IconButton> */}

                {
                    navbarItems.map((item, index) => {
                        //const link = "#" + item;
                        return (
                            <Box key={index} sx={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
                                {/*  <Divider orientation="vertical" flexItem /> */}
                                <Link className='navbar' smooth={true} offset={-60} duration={500} spy={true} to={item} underline="hover" color="secondary" >
                                    {item.toUpperCase()}
                                </Link>
                                {/* {(index == navbarItems.length - 1) && <Divider orientation="vertical" flexItem />} */}
                            </Box>
                        )
                    })
                }

                {/*               <IconButton

                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, visibility: "hidden" }}
                >
                    <MenuIcon />
                </IconButton> */}

            </Toolbar>
            <div className='progressBar' style={{ width: props.scroll }}>

            </div>
        </AppBar >


    )
}

export default NavBar