import { Button, Container, Divider, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Radio, RadioGroup, TextField, Typography } from '@mui/material'

import React, { useEffect, useState } from 'react'
import GradeSharpIcon from '@mui/icons-material/GradeSharp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import { useNavigate } from 'react-router-dom';
export default function CreateProduct() {
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory]= useState('');
    const navigateTo = useNavigate();
    const handleChange = (e) =>{
        
        setRating(e.target.value);
        console.log(e.target.value, 'rating');
    }
    const submitform = (e) =>
    {
        e.preventDefault();
        console.log('form submited',title, description, price, category);
        if (title && description && price) 
        {
            console.log(title, description, category, price, rating);
            fetch('http://localhost:8000/products', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({title , description , price})
                                    }).then( ()=> navigateTo('/'))


            
         }
        }
  return (

        <Container sx={{mt:12}}>
            <Grid container>
                <Grid item lg={12}>

                <FormLabel>Add New Product</FormLabel>
                <Divider />
                <form noValidate onSubmit={submitform}>

                    <TextField 
                    label='Product Name'
                    fullWidth
                    required
                    variant='outlined'
                    onChange={ (e) => setTitle(e.target.value) }
                    color='secondary'
                    >

                    </TextField>
                    <TextField 
                    label='Description'
                    onChange={ (e) => setDescription(e.target.value) }

                    multiline
                    rows={2}
                    fullWidth
                    required
                    variant='outlined'
                    color='secondary'
                    >

                    </TextField>
                    <TextField 
                    label='Price'
                    onChange={ (e) => setPrice(e.target.value) }

                    fullWidth
                    type="number"

                    required
                    variant='outlined'
                    color='secondary'
                    >

                    </TextField>
                     
                   


                    <TextField 
                    label='Rating'
                    select
                    fullWidth
                    type="number"
                    value={rating}
                    helperText="Please select the product rating"
                    onChange={handleChange}

                    required
                    variant='outlined'
                    color='secondary'
                    >
                        <MenuItem key={0} value={0}> No rating </MenuItem>

                        <MenuItem key={1} value={1}> <GradeSharpIcon fontSize="large" style={{ color: '#f5a142' }} /> </MenuItem>
                        <MenuItem key={2} value={2}> <GradeSharpIcon fontSize="large" style={{ color: '#f5a142' }} /> <GradeSharpIcon fontSize="large" style={{ color: '#f5a142' }} /></MenuItem>
                        <MenuItem key={3} value={3}> <GradeSharpIcon fontSize="large" style={{ color: '#f5a142' }} /> <GradeSharpIcon fontSize="large" style={{ color: '#f5a142' }} /> <GradeSharpIcon fontSize="large" style={{ color: '#f5a142' }} /></MenuItem>
                        <MenuItem key={4} value={4}> <GradeSharpIcon fontSize="large" style={{ color: '#f5a142' }} /> <GradeSharpIcon fontSize="large" style={{ color: '#f5a142' }} /> <GradeSharpIcon fontSize="large" style={{ color: '#f5a142' }} /> <GradeSharpIcon fontSize="large" style={{ color: '#f5a142' }} /></MenuItem>


                    </TextField>


                    <FormControl fullWidth>
                        <FormLabel>Select Product Category </FormLabel>
                        <RadioGroup value={category} defaultValue='coffee' onChange={(e)=>setCategory(e.target.value)}>
                        <FormControlLabel control={<Radio />} label='Coffee' value='coffee'/>
                                <FormControlLabel control={<Radio />} label='Fruit' value='fruit' /> 
                                <FormControlLabel control={<Radio />} label='Dairy' value='dairy' /> 


                        </RadioGroup>

                               


 
                    </FormControl>
                    
                    
                    <Button
                    variant="contained"
                    component="label"
                    >
                    Upload File
                    <input
                        type="file"
                        hidden
                    />
                    </Button>

                    
                <Button type='submit' variant='outlined' fullWidth endIcon={<KeyboardArrowRightIcon />}>Submit</Button>
                
                <Button type='reset'  variant='outlined' fullWidth>reset</Button>

             
                </form>

                </Grid>

            </Grid>
        </Container>
   
  )
}
