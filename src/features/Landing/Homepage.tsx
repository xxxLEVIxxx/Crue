import React from 'react'
import { Box, List, ListItem, Typography,ListItemText, Grid } from '@mui/material'
import {Container,Button} from '@mui/material'


const Homepage = () => {
  return (
    <Box sx={{maxWidth:1024}}>
      <Box >  
        <Typography variant='h4' sx={{ marginTop:10, fontSize:{
          xs: "1.5rem",
          sm:"2rem",
          md: "2.5rem",
          lg: "3rem",
        }}}>
          Skip the hiring. 
         
        </Typography>
        <Typography variant='h4' sx={{fontSize:{
          xs: "1.5rem",
          sm: "2rem",
          md: "2.5rem",
          lg: "3rem",
        }}}>
          Start building. 
        </Typography>
        <Typography>
          Crue gives you ready-made product teams you can plug in today.
        </Typography>
        <Typography>Or join as a builder to grow with others.</Typography>
      </Box>  

      <Box display={'flex'}  gap={5} marginTop={5}>
        <Button variant="contained" sx={{textTransform:"none"}}><Typography>Hire a Crue</Typography></Button>
        <Button variant="contained" sx={{textTransform:"none"}}><Typography>Join a Crue</Typography></Button>
      </Box>

      <Box alignSelf={"center"}display={'flex'} justifyContent={"center"} alignItems={"center"} marginTop={10}>
        <Grid container spacing={4} >
          <Grid item size={{xs:12}}>
            <Typography justifySelf={"center"}>Hiring is Broken. So is Being Hired.</Typography>
          </Grid>
          <Grid item size={{xs:12,md:6}}>
            <Typography sx={{justifySelf:"center"}}>
              For Companies
            </Typography>
            <List>
              <ListItem disableGutters sx={{paddingLeft:8}}>
                <ListItemText primary="Endless interviews. Fragmented skills. People who’ve never worked together."/>
              </ListItem>
              <ListItem disableGutters  sx={{paddingLeft:8}}>
                <ListItemText primary="You don't need freelancers. You need a team."/>
              </ListItem>
            </List>
          </Grid>
          <Grid item size={{xs:12,md:6}}>
            <Typography sx={{justifySelf:"center"}}>
              For Creators
            </Typography> 
            <List>
              <ListItem disableGutters  sx={{paddingLeft:8}}>
                <ListItemText primary="Tired of job posts asking you to do it all?" />
              </ListItem>
              <ListItem disableGutters  sx={{paddingLeft:8}}>
                <ListItemText primary="Burned out pretending you shipped the whole thing solo?"/>
              </ListItem>
            </List>
            
          </Grid>
          

        </Grid> 
      </Box>
    </Box>
  )
}

export default Homepage