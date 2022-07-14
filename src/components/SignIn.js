import React, { useState } from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { Avatar, Container, CssBaseline, Box, Typography, TextField, Grid, FormControlLabel, Checkbox, Button, Alert } from '@mui/material';
import {Link} from "react-router-dom"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PropTypes from 'prop-types';


async function loginUser(credentials) {
    return fetch('http://localhost:8080/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }



export default function SignIn({ setToken }) {
    const mytheme = createTheme();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();

        const token = await loginUser({
            email,
            password
          });
          console.log(token,"token");
          if ((token.toString() !== "User does not exist") && (token.toString() !== "Incorrect Password!, Try Again"))
          {
            console.log(token,"token");
            setToken(token);
          }
          else if (token === "User does not exist")
            console.log("User does not exist");
          else if (token === "Incorrect Password!, Try Again")
          console.log("User does not exist");

    }
   
  return (
    <div> 


        <ThemeProvider theme={mytheme}>
                        <Container component ="main" maxWidth="xs">
                            <CssBaseline /> 
                            <Box 
                            sx= {{
                                marginTop : 8, 
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'


                            }}>

                            <Avatar sx={{
                                m: 1, bgcolor: 'secondery.main'
                            }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant='h5'>
                                Sign in 
                            </Typography>
                            <Box component="form"  noValidate sx={{mt: 1}} onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField 
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoFocus>
                                    
                                </TextField>
                                

                            </Grid>

                            <Grid item xs={12}>
                                    
                                <TextField
                                required
                                fullWidth
                                name="password"
                                id="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}

                                autoFocus>
                                </TextField>

                            </Grid>
                            <FormControlLabel
                            control={<Checkbox value="remmber" color="secondary" />}
                            label ="Remember me" />
                           
                           
                           
                            <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{ mt: 3, mb: 2}}>
                                Sign in 
                            </Button>
                            <Grid item>
                                <Link to="/SignUp">
                                    {"Don't have an account ? Sign up"}
                                </Link>
                            </Grid>

                        </Grid>
                        
                                
                                


                            </Box>

                        </Box>




                        </Container>



                    </ThemeProvider>
    </div>
  )
}
SignIn.propTypes = {
    setToken: PropTypes.func.isRequired
  };