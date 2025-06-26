import React from 'react'
import { Box,AppBar, Toolbar, IconButton, Button,Container, Icon, Typography, Divider, Grid} from '@mui/material'
import { Navigate, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import SailingIcon from '@mui/icons-material/Sailing';


const LandingLayout = () => {
  const navigate = useNavigate();

  const goToLogin = ()=>{
    navigate("/login")
  }

  return (
    <Box sx={{width:"100%", margin:0}} >
      <AppBar position="static" sx={{backgroundColor:"black"}}>
       
        <Toolbar sx={{maxWidth:1024, alignSelf:"center", width:"100%",justifyContent:"space-between"}} disableGutters>
          <IconButton sx={{marginLeft:"2%", gap:1}}>
            <SailingIcon sx={{color:'white'}}></SailingIcon>
            <Typography sx={{color:'white'}}>Crue</Typography>
          </IconButton>


          <Button variant='contained' onClick={goToLogin} sx={{backgroundColor:'white', color:"black", marginRight:"2%"}}>
            Sign In
          </Button>
        </Toolbar>
       
      </AppBar>
      <Box sx={{maxWidth:1024, justifySelf:"center"}}>
        <Container> 
          <Outlet />
        </Container>
      
      </Box>

      <Divider sx={{backgroundColor:'rgba(255, 255, 255, 0.25)', marginBottom:4}}/>
      
      <Grid container >
        <Grid item size >
            <Box sx={{display:"flex", flexDirection:"column"}}></Box>
        </Grid>
      </Grid>
      <Typography sx={{justifySelf:"center"}}>@2025 Crue. All rights reserved.</Typography>
    </Box>
  )
}

export default LandingLayout;