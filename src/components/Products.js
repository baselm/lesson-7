import { Button, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function Products() {

    // Function to Handle Click
    const HandleClick= () => {
        setName("Alice"); 
        console.log(name);
    }

const [name, setName] = useState('Bob')
// use State to monitor the products data

const [products, setProducts] = useState([]);


 

useEffect( () => {
    fetch('http://localhost:8000/products')
    .then(res => res.json())
    .then(data => setProducts(data))

}
    
)

  return (
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
  )
}
