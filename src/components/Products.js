import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Products() {
  return (
    <Container>
        <Grid container spacing={2}>
            <Grid item xs={12} >
                <Typography component={'h1'} variant='h1' color='Secondary' align='center'>
                    Products Page
                </Typography>
            </Grid>
        </Grid>
    </Container>
  )
}
