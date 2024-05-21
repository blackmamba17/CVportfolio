import React from 'react'
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import "../assets/styles/Curriculum.css";


function Curriculum() {



    const cv = [{
        business: "SIELTE SPA",
        date: "2020 - 2022",
        description: "Helping the client to carry out the internet network, vpn configuration and general troubleshooting.",
        website: "https://www.sielte.it/index.php/it/",
        logo: "/CVportfolio/public/sielte.jpg"
    }, {
        business: "MOVIA SPA",
        date: "2023 - current",
        description: "vpn, hardware & software troubleshooting and installation, mongoDB admin, creating full responsive html template for the client, testing new staging updates, checking new GitHub commit and more",
        website: "https://movia.biz/",
        logo: "/CVportfolio/public/movia.jpeg"
    }, {
        business: "FREELANCER",
        date: "2023 - current",
        description: "release live server with the application that the customer required",
        website: "http://localhost:5173/",
        logo: "/CVportfolio/public/job2.png"
    }]

    return (
        <Box id="careers" sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ pb: 2 }}>
                <h2>Careers</h2>
            </Box>
            <Box className="curriculum" sx={{ display: "flex", justifyContent: "space-around" }} >

                <List sx={{ display: "flex", flexWrap: "wrap " }}>
                    {cv.map((job, index) => {
                        return (

                            <Box key={index}>
                                <ListItem >
                                    <ListItemAvatar>
                                        <Avatar src={job.logo}>

                                        </Avatar>
                                    </ListItemAvatar>
                                    <a href={job.website} key={index} target="_blank">
                                        <ListItemText primary={job.business} secondary={job.date} />
                                    </a>
                                </ListItem>
                            </Box>

                        )
                    })}
                </List>

            </Box>
        </Box>
    )
}

export default Curriculum