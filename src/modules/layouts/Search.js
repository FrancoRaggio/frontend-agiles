import React from 'react'
import { Grid } from "@material-ui/core";


class Search extends React.Component {
    render() {
        return (


            <div>
                    <Grid container>
                        <Grid xs={6} sm={8}>
                        <input type="text" class="form-control-lg" placeholder="Busca tu Mascota." />
                        </Grid>
                        <Grid xs={12} sm={4} >
                        <input type="submit" class="btn btn-lg btn-danger btn-block" value="Buscar..." />
                        </Grid>
                    </Grid>
                </div>
        )
    }
}
export default Search;
