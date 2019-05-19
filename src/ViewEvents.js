import React from 'react';

import { withRouter } from 'react-router-dom';

import axios from 'axios';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import WarningOutlined from '@material-ui/icons/Warning';

const styles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/4y8A6Ve-3GE)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    flexGrow: 1,
  },
  paper: {
    height: '85vh',
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '10px 30px',
    marginTop: theme.spacing(10),
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontWeight: 'bold'
  },
  avatar: {
    marginTop: theme.spacing(3),
    color: 'gray',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  listicon: {
    height: '3.5vh',
    width: '1.8vw'
  },
  submit: {
    margin: theme.spacing(2, 0, 5),
    height: '6vh',
    fontSize: '2vh',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  demo: {
    maxHeight: '25vw',
    overflow: 'auto',
  }
});

class ViewEvents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.location.state.email,
      dense: false,
      secondary: false,
      events: [],
    };
    console.log(this.state.email)
    this.handleGoBack = this.handleGoBack.bind(this);

    this.getEvents = this.getEvents.bind(this);
    this.populateEvents = this.populateEvents.bind(this);

    this.getEvents()
  }

  handleGoBack(event) {
    this.props.history.goBack();
  }

  getEvents() {
    axios.get('http://localhost:5000/events/all', {
      params: {
      }
    })
      .then(((response) => {
        this.setState({
          events: response.data
        })
      }))
  }

  populateEvents() {
    return this.state.events.map(value => {
      return (
        <ListItem key={value.id}>
          <ListItemAvatar>
            <Avatar className='classes.listicon'>
              <WarningOutlined />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={value.description}
          />
        </ListItem >
      )
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography
              component="h1"
              variant="h1"
              align="center"
              className={classes.title}>
              PARKYOU
            </Typography>

            <Typography className={classes.avatar} component="h1" variant="h4">
              EVENTS
            </Typography>
            <Grid container spacing={5}>
              <Grid item xs={12} md={12}>
                <div className={classes.demo}>
                  <List dense={this.dense}>
                    {this.populateEvents()}
                  </List>
                </div>
              </Grid>
            </Grid>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleGoBack}
            >
              Back
            </Button>

          </div>
        </Grid>
      </Grid>
    );
  }
}

// export default withRouter(connect()(withStyles(styles)(ViewReservedParkingSpots)));
export default withRouter(withStyles(styles)(ViewEvents));