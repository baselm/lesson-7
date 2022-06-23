import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Orders() {
  return (
    <Container maxWidth="lg">
        <Grid container >
        <Grid item xs={12} md={6} lg={4}>
        <Typography variant='h5'>Orders Page </Typography>
        </Grid>
        </Grid>
        
    </Container>
  )
}
