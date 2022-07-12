# Add a log out functionality . 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### Create an empty App
`npx create-react-app Lesson-7`

------------


## Step 13. 
### In application layout component we need to allow user to logout from the session.
1. Create a new method to handle Log out 
```
const handleLogOut = () => {
    localStorage.removeItem('token');
    console.log('clear session'); 
    navigate('/Products'); 
    

  }

``` 
2. Make sure to update the logout Menu Item onClick event to execute the method above 
```
              <MenuItem onClick={handleLogOut}>Log out</MenuItem>

```