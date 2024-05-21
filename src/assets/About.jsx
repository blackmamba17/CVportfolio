
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "../assets/styles/About.css"



function About() {
    return (
        <Box id="about" sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <h2>About me</h2>
            <p>
                I am a really enjoiable person, curious about everything and perfectly merged with the team work. I started my career in computer science even before the High School, using Hamachi to configure VPN and C++ to create basic shell programs. Growing up with the PS2, Nintendo DS, XBOX360 and an old crap Notebook, I started to develop hardware skills about repair and assembling pc. Later I found that I can create ad deploy MODs for old games to revive and to make them more funny. I was already having skills in server management and programming, so the question became naturally..       </p>
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "no-wrap", m: 2 }}>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", p: 2 }} >
                    <img style={{ boxShadow: "10px 10px 13px -7px #000000", width: "100%" }} className='heroImage' src="public/heroGif2.gif" alt="programming image" />
                </Box>

                <Box style={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <h2 >why not choose a career as a programmer?</h2>
                    <p>And now I am here improving my self every day, learning new skills and practice them directly in the field. Curious about what can i do? Check my CV!</p>
                    <Button onClick={() => {
                        window.open('https://www.linkedin.com/in/gtorrisi0702/', '_blank')
                    }} sx={{ maxWidth: "100%" }} className='buttonHover' variant="contained" color="secondary" size='large' endIcon={<SendIcon />}>CURRICULUM</Button>

                </Box>

            </Box>
        </Box >
    )
}

export default About