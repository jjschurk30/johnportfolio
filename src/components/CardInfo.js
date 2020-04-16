import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


function CardInfo() {

  return (
  <div className = "cards">
    <Card>
      <CardContent>
        <Link to = "/postone" style={{ color: '#000000' }}><Typography variant="p" component="h5">
          Dawn of A New Day
        </Typography></Link>
        <br />
        <Typography color="textSecondary">
          The beginning of a new journey into the world of programming.
        </Typography>
        <br />
        <Typography variant="body2" component="p"  color="textSecondary">
          April 11th, 2020
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

export default CardInfo;