import React from 'react'
import AreaPrincipal from './AreaPrincipal'
import LateralEsq from './LateralEsq'
import { Grid } from '@material-ui/core'

export default props => {
    return <Grid container>
        <Grid item xl>
            <LateralEsq />
        </Grid>

        <Grid item xs>
            <AreaPrincipal />
        </Grid>
    </Grid>

}

