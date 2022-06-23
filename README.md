# Step 2:  Creating an Empty Components for (Products, ProductCard, SignIn, SignOut) and routers dom configuration

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### reating an Empty Components  (Products, ProductCard, SignIn, SignOut)
## Part A (Components Creation)
- in VSCode create a new folder called Components 
- Inside the components folder create a new file called Products.js 
- Inside Products.js file type `rfc` folled by TAB -> this will generate a code snippet for the Products component 
- Repeate the steps for all of the above. 
## Part B (Router Dom)
1. Inside index.js import router dom so you can includes all routes to the above elements 
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';
    import { BrowserRouter } from 'react-router-dom';
    import SignUp from './components/SignUp';
    import SignIn from './components/SignIn';
    import Products from './components/Products';
    import {Routes, Route} from 'react-router-dom'
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        
        <Route path="SignUp" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="Products" element={<Products />} />
    
      </Routes>
    </BrowserRouter>
    );
    
    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
    

------------


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



