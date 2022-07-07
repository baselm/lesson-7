import { AppBar, Avatar, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import CategoryIcon from '@mui/icons-material/Category';
import UpdateIcon from '@mui/icons-material/Update';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import useToken from './useToken'
import SignIn from './SignIn';



export default function AppLayout({children}) {
   
  const drawerWidth = 160;
  let navigate = useNavigate();
  const [pageTitle, setpageTitle] = useState('Solana Cafe');
  const [anchorElUser, setAnchorElUser] = useState(null);


  const handleLogOut = () => {
    localStorage.removeItem('token');
    console.log('clear session'); 
    navigate('/Products'); 
    

  }

  const handleMenu = (event) => {
    setAnchorElUser(event.currentTarget);

  }
  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  };
  const handleSignIn = ()=>
  {
    navigate('/'); 
  }
  return (
    <div>
      <div>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{flexGrow:1, marginRight: 150}}
>
            {pageTitle}
          </Typography>


          <Tooltip title="Open settings">
          <IconButton
                sx={{ p: 0 }}
                onClick={handleMenu} 
              >
                

                <Avatar alt="Remy Sharp" src={require('../images/Cafe-Owners.png')} />
               
                
              </IconButton>
              </Tooltip>
              <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={() => navigate('/Profile')}>Profile</MenuItem>
              <MenuItem onClick={() => navigate('/SignUp')}>Sign Up</MenuItem>
              <MenuItem onClick={handleSignIn}>Sign In</MenuItem>
              <MenuItem onClick={() => navigate('/ContactUs')}>Contact Us</MenuItem>
              <MenuItem onClick={handleLogOut}>Log out</MenuItem>

               
            </Menu>

        </Toolbar>
        
      </AppBar>
      
      <Drawer
        
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
            <ListItem  

            disablePadding
            >
                  <ListItemButton onClick={ () => {navigate('/Products'); setpageTitle('Products')}}>
                    <ListItemIcon>
                      <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Products'} />
                  </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem  disablePadding>
                  <ListItemButton onClick={ () => {navigate('/Orders'); setpageTitle('Orders')}}>
                    <ListItemIcon>
                    <UpdateIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Orders'} />
                  </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem  disablePadding>
                  <ListItemButton onClick={ () => {navigate('/Dashboard'); setpageTitle('Dashboard')}}>
                    <ListItemIcon>
                    <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Dashboard'} />
                  </ListItemButton>
            </ListItem>
            <Divider />
        </List>
         
         
      </Drawer>
      </div>
      <div className='class.page'>
      {children}
      </div>
    </div>
  )
}
