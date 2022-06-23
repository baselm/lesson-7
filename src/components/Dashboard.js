import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Dashboard() {
  return (

    <Container>
        <Grid container>
            <Grid item>
                <Typography sx={{flexGrow:1, marginRight: 150}}>
            Dashboard
            </Typography>
            </Grid>

        </Grid>
        
    </Container>
  )
}
