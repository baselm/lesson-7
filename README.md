# Adding a menu item for the user's profile. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### Create an empty App
`npx create-react-app Lesson-7`

------------


The Project is divided into Seven branches each branch covers a certain step as below:
1.  Step 1 add new components (Profile)
2.  Step 2 Modify the index.js file so you include the profile page:
```
<BrowserRouter>
   <AppLayout>
  <Routes>
 
      <Route path="/" element={<App />} />
      
      <Route path="SignUp" element={<SignUp />} />
      <Route path="SignIn" element={<SignIn />} />
      <Route path="Products" element={<Products />} />
      <Route path="Orders" element={<Orders />} />
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="CreateProduct" element={<CreateProduct />} />
      <Route path ="ContactUs" element={<ContactUs />} />
    

  </Routes>
  </AppLayout>
</BrowserRouter>
```
3.  Step 3 Add a a menu to the application layout:
```
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

```
 
------------

### in next step we need to install MYSQL locally or run it a docker container for quick integration 