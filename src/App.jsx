import React, { useEffect, useState } from "react";
import Hero from "./assets/Hero";
import About from "./assets/About";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from '@mui/material/Divider';
import Skills from "./assets/Skills";
import Zoom from '@mui/material/Zoom';
import "./assets/styles/App.css"
import Curriculum from "./assets/Curriculum";
import NavBar from "./assets/NavBar";



function App() {

  const [y, setY] = useState(window.scrollY); //storing current scroll bar position
  const [totalY, setTotalY] = useState(); //storing total scrollable area
  const [scrollBar, setScrollBar] = useState(); //storing size of scroll bar
  const [scroll, setScroll] = useState("0%") // width of scrollbar


  useEffect(() => {
    window.addEventListener("scroll", () => {
      setY(window.scrollY);
    }); //it listen to the scroll, so when scrolling i set new value of y bar position

    const element = document.querySelector("body");
    setTotalY(element.clientHeight);
    setScrollBar(window.innerHeight);



    let scroll = ((y + scrollBar) / totalY) * 100;

    scroll > 100 ? scroll = "100%" : scroll = `${scroll}%`;

    if (y == 0) { scroll = "0%" }

    // console.log("\n y position of bar: " + y + " total scrollable y area: " + totalY + " size of scrollbar: " + scrollBar + " scroll %: " + scroll);
    setScroll(scroll);

  }, [y]);


  return (




    <Box id="page" sx={{ width: { md: 900, lg: 1150, xl: 1350 }, height: 3000, display: "flex", justifyContent: "center", flexDirection: "column" }} >


      <NavBar scroll={scroll}>

      </NavBar>

      <Paper className="padding" elevation={24} sx={{ height: "100%", p: 5, backgroundColor: "rgba(255,255,255)", backdropFilter: "blur(10px)", borderRadius: "0 0 15px 15px" }}>


        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Curriculum />

      </Paper>
    </Box>


  );
}

export default App;
