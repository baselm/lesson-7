import {  Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, LinearProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

export default function Products() {

    

// use State to monitor the products data
const [products, setProducts] = useState(null);
// use effect to get the data from the server api  
// Make a state for pending loading data 
const [isLoading, setIsLoading]= useState(true);
const [showDeleteMsg, setShowDeleteMsg]= useState(false);
const [deleteItem, setDeleteItem]= useState(false);

const handleDelete = async(id) => {

  setShowDeleteMsg(true);
  if (deleteItem && !showDeleteMsg)
  {
    console.log("handleDelete()", "deleteItem " + deleteItem,"showDeleteMsg "+ showDeleteMsg);

    await fetch('http://localhost:8000/products/' + id, {
    method : 'DELETE'
  }).then(  () => {const newProducts = products.filter(product => product.id != id);
    setProducts(newProducts);})
   
  

  }
  

 }


  

useEffect( () => {
    fetch('http://localhost:8000/products')
    .then(res => res.json())
    .then(data => {
                    setProducts(data);
                    setIsLoading(false);
                          })

}
    
)
// set a state for prgress bar
const [progress, setProgress] =useState(0);

useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  

  return (
    <Container>
        <Grid container >
        <Grid item lg={12}>
        <Typography component="h2" variant="h1" color="secondary" align="center" sx={{mt:10}}>
                 Products Page 
                 
        </Typography>
        <LinearProgress variant="determinate" value={progress} color="secondary"/>

        <Typography color="error" align="center" sx={{mt:4}}>
          {isLoading && "Data is Loading ..."}
        </Typography>

        </Grid>
        
       
        </Grid>
        <Grid container spacing={2}>
                    { products &&
                        products.map(product => (


                            <Grid item xs={12} md={6} lg={4} key={product.id}>
                                <ProductCard product={product} handleDelete={handleDelete} />
                                


                                </Grid>
                        ))
                    }
        </Grid>
        <Dialog
           open= {showDeleteMsg}>
          <DialogTitle >{"Delete product"}</DialogTitle>
          <DialogContent>
            <DialogContentText>{"Are you sure you want to delete this product"}</DialogContentText>
            <DialogActions>
          <Button onClick={ () => {setDeleteItem(false); setShowDeleteMsg(false);console.log("deleteItem " + deleteItem,"showDeleteMsg "+ showDeleteMsg);}} autoFocus>Disagree</Button>
          <Button onClick={ () => {setDeleteItem(true); setShowDeleteMsg(false); console.log("deleteItem " + deleteItem,"showDeleteMsg "+ showDeleteMsg);}} >
            Agree
          </Button>
        </DialogActions>
          </DialogContent>
        </Dialog>
    </Container>
  )
}
