import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// Material UI
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: 70,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  logoIcon: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    paddingRight: 10,
  },
  logoButton: {
    color: 'white',
    textTransform: 'none',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.logo}>
              <Button
                className={classes.logoButton}
                onClick={() => history.push('/dashboard')}
              >
                <SportsEsportsIcon className={classes.logoIcon} />
                <Typography variant='h6' component='span'>
                  2048
                </Typography>
              </Button>
            </div>
            <div className={classes.buttons}>
              {props.create && (
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => history.push('/edit/quiz/')}
                >
                  Create Quiz
                </Button>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
}
