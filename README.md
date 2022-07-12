# Creating a custom hook . 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### Create an empty App
`npx create-react-app Lesson-7`

------------


## Step 12 
1. In the component folder create a new file called useToken.js.
2. This file will be used to get/set the token using our custom hook instead of the use state of react-js. 
3.  In useToken.js make sure the file content as below:
```
  import { useState } from 'react';

export default function useToken() {

  
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}
```
4. This session manager will be used to save the auth token so users can open multiple tabs without the need to re-login.
5. In App.js  we need to use our custom token hook:
  - import the custom hook and declare it as a custom state:
  ```
  import SignIn from './components/SignIn';
import Orders from './components/Orders';
import useToken from './components/useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <SignIn setToken={setToken} />
  }
    return (
   
    <div>
       {token && <Orders />}  
    </div>
   
  );
}

export default App;


  ```
### Make sure to check that the token is correct before showing the order page.

------------

### in next step we need to install MYSQL locally or run it a docker container for quick integration 