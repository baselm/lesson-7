import React, { useState } from 'react'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteIcon from '@mui/icons-material/Favorite';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Card, CardContent, CardHeader, Container, CardActions, Typography, IconButton, CardMedia } from '@mui/material'
import AddSharpIcon from '@mui/icons-material/AddSharp';
import { useNavigate } from 'react-router-dom';


export default function ProductCard({product}) {

const [active,setActive]=useState(true);
const navigateTo = useNavigate();
const handleCreateProduct = (e) => {
  navigateTo('/CreateProduct')
}
 
  return (

    <Container>
         <Card elevation={2}>
      <CardHeader 
      action= {
        <IconButton onClick={e => {
          console.log("add to fav", product.id)
          setActive(!active);
          

        }}
       
        >
          {active ? <FavoriteBorderSharpIcon /> : <FavoriteIcon color="secondary"/>}

        </IconButton>
      }
      title={product.title}
      subheader = {product.type}
      
      />
      <CardMedia
        component="img"
        height="300"
        width="300"
        image={product.filename}
        alt={product.rating}
      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
        {product.description}

      </Typography>
      
      </CardContent>
      <CardActions sx={{   display: "flex",
    justifyContent: "space-between"}}>
      <IconButton>
         <ShoppingCartIcon  fontSize='large' color="secondary"  style={{ color: '#0C7C90'}} />
        </IconButton>

        <IconButton onClick={handleCreateProduct}>
        <AddSharpIcon fontSize='large' style={{ color: '#0C7C90'}} />
        </IconButton>
      </CardActions>

    </Card>
    </Container>
  )
}
