import { Button, Container, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function ContactUs() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    const handleForm = (e) => {

        e.preventDefault(); 

        console.log("Form submited:  ");
        console.log({name, email, subject, message});
    }
  return (
    <Container maxWidth='lg' sx={{ mt:12 }}>
        <form noValidate onSubmit={handleForm}> 
            <TextField 
                label='Full Name' 
                name='name' 
                fullWidth required 
                onChange={(e) => {setName(e.target.value); console.log(name)}}
                ></TextField>
                <TextField 
                    required 
                    label='Email Address' 
                    type='email' fullWidth 
                    name='email' 
                    onChange={(e) => setEmail(e.target.value)}
                    ></TextField>
                <TextField 
                    label='Subject' 
                    name='subject' 
                    fullWidth
                    onChange={(e) => setSubject(e.target.value)}
                    
                    ></TextField>
                <TextField 
                    label='message' 
                    name='message' 
                    fullWidth 
                    multiline 
                    rows={6}
                    onChange={(e) => setMessage(e.target.value)}>

                    </TextField>
            <Button type='submit'>Submit</Button>
            <Button type='reset'> Clear Form</Button>
        
        
        </form>
    </Container>
  )
}
