import React from 'react';

import { withRouter } from 'react-router-dom';

import axios from 'axios';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/qwtCeJ5cLYs)',
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
  description: {
    maxHeight: '25vw',
    overflow: 'auto',
  }
});

class ReportEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.location.state.email,
      dense: false,
      secondary: false,
      description: '',
    };
    console.log(this.state.email)
    this.handleGoBack = this.handleGoBack.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.descriptionHandleOnChange = this.descriptionHandleOnChange.bind(this)

  }

  handleGoBack(event) {
    this.props.history.goBack();
  }

  descriptionHandleOnChange(event) {
    this.setState({
      description: event.target.value
    })
  }

  handleSubmit() {
    axios.post('http://localhost:5000/events',
      {
        description: this.state.description
      },
      {
        params: {
          userEmail: this.state.email
        },
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(((response) => {
        this.setState({
          events: response.data
        })
        alert("Event reported!")
        this.handleGoBack()
      }))
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
              REPORT AN EVENT
            </Typography>
            <TextField
              className={classes.description}
              variant="outlined"
              margin="normal"
              multiline={true}
              required
              fullWidth
              id="description"
              label="Description"
              name="description"
              autoComplete="description"
              autoFocus
              value={this.state.description}
              onChange={this.descriptionHandleOnChange}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              Report event
            </Button>
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
export default withRouter(withStyles(styles)(ReportEvent));