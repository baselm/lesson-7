import { Button, Container, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function ContactUs() {
    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

    const handleForm = (e) =>
    {
        e.preventDefault();
        const data = new FormData(e.target);
        let name = data.get('name');

        
        setToSend({...toSend, [e.target.name]: [e.target.value]});
        console.log(toSend);
         
    }
  return (
    <Container maxWidth='lg' sx={{mt:12}}>
        <form noValidate onSubmit={handleForm}>
        <TextField label='Name' fullWidth id="name" name="name"  ></TextField>
        <TextField label='Email Address' fullWidth type='email' name="email" ></TextField>
        <TextField label="Subject"  name="subject"  fullWidth></TextField>
        <TextField label=" Your Message " name="message" helperText="Enter a full description of the issue" fullWidth multiline rows={5}></TextField>
        <Button type='submit'>Submit</Button>
        <Button type='reset'>Clear form</Button>

    </form>

    </Container>
    
    
  )
}
