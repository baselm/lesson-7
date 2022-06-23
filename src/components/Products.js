import { Button, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

export default function Products() {

    

// use State to monitor the products data
const [products, setProducts] = useState([]);


// use effect to get the data from the server api  
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
                    
                 </Typography>

              
            </Grid>
        </Grid>
        <Grid container>
                    {
                        products.map(product => (


                            <Grid item xs={12} md={6} lg={3} key={product.id}>
                                <ProductCard product={product} />
                                </Grid>
                        ))
                    }
        </Grid>
    </Container>
  )
}
