# State and Fetching a data

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### State and Fetching a data from a data server 
## PART A
1. in the root folder of your project create a new folder called data 
2. inside the data folder create a new file data.json.
3. Past the content of data.json inside your file 
## PART B 
1. Open a new terminal and install the JSON-Server Package using 
`npm install -g json-server`
2. Make Json server populate your data into a data endpoint using the following command:
```
json-server --watch data/data.json --port 8000
```
## PART C
1. Inside your poducts.js file useState to fetch the data from the API 
```javascript
useEffect( () => {
    fetch('http://localhost:8000/products')
    .then(res => res.json())
    .then(data => setProducts(data))

                }
     )
```
2. Inside the render part of this component try to access the products data using the map 
```javascript
<Container>
        <Grid container spacing={2}>
            <Grid item xs={12} >
                <Typography component={'h1'} variant='h1' color='Secondary' align='center'>
                    Products Page
                </Typography>
                 <Typography>
                    {
                        products.map(product => (
                            <p key={product.id}> {product.title}</p>
                        ))
                    }
                 </Typography>
                <Button onClick={HandleClick}> Click Me!</Button>
            </Grid>
        </Grid>
    </Container>
```


The Project is divided into Seven branches each branch covers a certain step as below:
1.  Step 1 Covers the creation of the project
2.  Step 2 Covers the Creation of Empty Components for (Products, ProductCard, SignIn, SignOut) and routers dom configuration
3.  Step 3 Covers using State and Fetching a data from a JSON server API
4.  Step 4 Covers the use of Card Component to Display Products images 
5.  Step 5 Covers the use of Card Actions and Card Content. Adding Several icons and activation of Icon button. 
6.  Step 6 Covers the use of Progress bar and Data loading 

------------


In the project directory, you can run:
### install Material UI 
`npm install @mui/material @emotion/react @emotion/styled`
### install Material ui  Icons
`npm install @mui/icons-material`
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



