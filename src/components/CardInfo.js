import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import GridList  from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CardInfo() {

  return (
  <div className = "cards">
   <GridList>
    <Card>
      <CardContent>
        <Link to = "/DawnOfANewDay" style={{ color: '#000000' }}><Typography variant="p" component="h5">
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

        <Card>
          <CardContent>
            <Link to = "/OffTheBeatenPath" style={{ color: '#000000' }}><Typography variant="p" component="h5">
              Off the Beaten Path
            </Typography></Link>
            <br />
            <Typography color="textSecondary">
              Set the course for the coding journey, but lost the desire midway through the adventure.
            </Typography>
            <br />
            <Typography variant="body2" component="p"  color="textSecondary">
              April 17th, 2020
            </Typography>
          </CardContent>
        </Card>

                <Card>
                  <CardContent>
                    <Link to = "/TotalEclipse" style={{ color: '#000000' }}><Typography variant="p" component="h5">
                      Total Eclipse
                    </Typography></Link>
                    <br />
                    <Typography color="textSecondary">
                     Difficult times suck, but coming out on the other side and living is worth all the pain.
                    </Typography>
                    <br />
                    <Typography variant="body2" component="p"  color="textSecondary">
                      April 18th, 2020
                    </Typography>
                  </CardContent>
                </Card>

</GridList>
    </div>
  );
}

export default CardInfo;