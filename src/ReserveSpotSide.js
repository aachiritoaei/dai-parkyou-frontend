import React from 'react';
import ReactDOM from 'react-dom';

import { withRouter } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/PrECKxBI_P8)',
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
  formControl: {
    margin: theme.spacing.unit,
    minWidth: '20vw',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class ReserveSpotSide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parkingName: '',
      parkingSpot: '',
      email: this.props.location.state.email
    };

    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleParkingNameChange = this.handleParkingNameChange.bind(this);
    this.handleParkingSpotChange = this.handleParkingSpotChange.bind(this);
  }

  handleGoBack(event) {
    this.props.history.goBack();
  }

  handleParkingNameChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleParkingSpotChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  generate(element) {
    return [0, 1, 2].map(value =>
      React.cloneElement(element, {
        key: value,
      }),
    );
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
              RESERVE PARKING SPOT
            </Typography>
          <form className={classes.form}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="parking-name-simple">Parking Name</InputLabel>
              <Select
                value={this.state.parkingName}
                onChange={this.handleParkingNameChange}
                inputProps={{
                  name: 'parkingName',
                  id: 'parking-name-simple',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="parking-spot-simple">Parking Spot</InputLabel>
              <Select
                value={this.state.parkingSpot}
                onChange={this.handleParkingSpotChange}
                inputProps={{
                  name: 'parkingSpot',
                  id: 'parking-spot-simple',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Reserve
              </Button>
          </form>
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

export default withRouter(withStyles(styles)(ReserveSpotSide));