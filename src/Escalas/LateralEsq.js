import React, { Fragment } from 'react'
import { Typography, Paper, List, ListItem } from '@material-ui/core'


const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflow: 'auto'
    }
}

export default props => {

    return <Paper style={{ styles }}>
        <Fragment>
            <Typography
                variant='headline'
                style={{ textTransform: 'capitalize' }}
            >
                Menu
            </Typography>

            <List Component='ul'>
                <ListItem
                    button
                > Prestadores
                </ListItem>
                <ListItem
                    button
                > Escala Médica
                </ListItem>
                <ListItem
                    button
                > Escala 
                </ListItem>
                <ListItem
                    button
                > Consolidado Médico
                </ListItem>

            </List>
        </Fragment>
    </Paper>


}