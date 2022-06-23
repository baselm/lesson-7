import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

import CategoryIcon from '@mui/icons-material/Category';
import UpdateIcon from '@mui/icons-material/Update';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AccountCircleOutlined } from '@mui/icons-material';



export default function AppLayout({children}) {
   
  const drawerWidth = 160;
  let navigate = useNavigate();
  const [pageTitle, setpageTitle] = useState('Solana Cafe');
  const handleMenu = () => {

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
          
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                
                color="inherit"
              >
                <AccountCircleOutlined />
              </IconButton>

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
