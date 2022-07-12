# Adding an API for token authentication . 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### Create an empty App
`npx create-react-app Lesson-7`

------------


## Step 11 
1.  Create a folder called server 
2. Create a new file called server.js 
2.  In server.js make sure the file content as below:
```
 const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use('/login', (req, res) => {
    res.send({
      token: 'lab-password'
    });
  });

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));

```
4. This server.js will create an express API for given the user an authentication token.
5. In SignIn.js compoenent we need to send a post request to get the user's token. So we need to do two things:
  - Create a function to fetch the token from the users' API 
  ```
  async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
  ```
  - Send the email and password of the SignIn form to the API endpoint "/login"
  ```
export default function SignIn({ setToken }) {
    const mytheme = createTheme();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();
        console.log(password,email);
        const token = await loginUser({
            email,
            password
          });
          
          console.log(token,"token");
          setToken(token);
    }
  ```

------------

### in next step we need to install MYSQL locally or run it a docker container for quick integration 