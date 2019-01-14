import React, { } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'



export default props =>
    <AppBar position='static'>
        <Toolbar>
            <Typography
                color='inherit'
                variant='h5'>
                Escala Médica do Arlinda Marques
            </Typography>
        </Toolbar>
    </AppBar>