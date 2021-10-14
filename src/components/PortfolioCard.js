import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@mui/material/Card';
import { Container } from '@material-ui/core';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function MediaCard(props) {
  return (
      <Container className='card-container'>
        <Grid container >
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 1200 }} className='card'>
              <CardMedia
                component="img"
                height="540"
                width="600"
                image= {props.image}
                alt="waifu"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {props.name}
        </Typography>
              </CardContent>
              <CardActions>
                <a className='card-links' href={props.location} >GO HERE</a>
              </CardActions>
            </Card>
          </Grid>
          </Grid>
        </Container>

    );

}

export default MediaCard;