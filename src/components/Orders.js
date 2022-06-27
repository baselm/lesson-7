import { Container, Grid, Typography } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import React from 'react'

export default function Orders() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });
  console.log(data);

  return (
    <Container sx={{mt:12}}>
          <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
    </Container>
  )
}
