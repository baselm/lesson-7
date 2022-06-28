# Adding Drawer and App Nav Bar. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### Create an empty App
`npx create-react-app Lesson-7`

------------


The Project is divided into Seven branches each branch covers a certain step as below:
1.  Step 1 add new components (Dashboard and Orders)
2.  Step 2  add an Application Layout
3.  Step 3 Modify the index.js file so the AppLayout will contains all routes:
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
    

  </Routes>
  </AppLayout>
</BrowserRouter>
```
4.  Step 4 Add a AppBar to the application layout and a drawer:
```
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
```
5.  Step 5 Add a data Grid to the products page:
Install the demo data using 
`
npm install @mui/x-data-grid-generator
`
```
<Container sx={{mt:12}}>
          <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
    </Container>
```
------------


In the project directory, you can run:
### install Material UI 
`npm install @mui/material @emotion/react @emotion/styled`
### install Material ui  Icons
`npm install @mui/icons-material`
### Install Routers dom
npm install react-router-dom@6
### install json server
`npm install -g json-server`
### publish json data using json server as an API 
`json-server --watch data/data.json --port 8000`
## Available Scripts



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# lesson-7


