import React from 'react';

import { withRouter } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/IFLgWYlT2fI)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
    marginTop: theme.spacing(-20),
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontWeight: 'bold'
  },
  avatar: {
    marginTop: theme.spacing(5),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 5),
    height: '7vh',
    fontSize: '2vh',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
});

class SimpleMenuSide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null
    };

    this.emailHandleOnChange = this.emailHandleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  emailHandleOnChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.history.push({
      pathname: '/menu',
      state: { email: this.state.email }
    })
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

            <Avatar className={classes.avatar}>
              <MenuOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              MENU
            </Typography>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Show my reserved parking spots
            </Button>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Reserve parking spot
            </Button>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Show reported events
            </Button>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Report an event
            </Button>




          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(SimpleMenuSide));

// export default function MenuSide() {
//   const classes = useStyles();

//   return (
//     <Grid container component="main" className={classes.root}>
//       <CssBaseline />
//       <Grid item xs={false} sm={4} md={7} className={classes.image} />
//       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <MenuOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Pick an action
//           </Typography>
//           <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//               href="/reserve"
//             >
//               Reserve a parking spot
//             </Button>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//               href="/report"
//             >
//               Report an event
//             </Button>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }