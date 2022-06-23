import { Card, CardContent, CardHeader, Container, Grid } from '@mui/material'
import React from 'react'

export default function ProductCard({product}) {
console.log(product.title   )
  return (

    <Container>
         <Card>
            <CardHeader
            title= {product.title }
            />
            <CardContent>
                {product.description}
            </CardContent>
         </Card>
    </Container>
  )
}
