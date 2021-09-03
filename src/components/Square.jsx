import React from 'react';
// Material UI
import { Grid, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: 'center',
    paddingTop: '20%',
    paddingBottom: '20%',
    width: 'min(20vh, 20vw)',
    fontSize: 'min(8vh, 8vw)',
  },
  zero: {
    color: '#cdc1b4',
    background: '#cdc1b4',
  },
  two: {
    color: '#776e65',
    background: '#eee4da',
  },
  four: {
    color: '#776e65',
    background: '#eee4da',
  },
  eight: {
    color: '#f9f6f2',
    background: '#f3b27a',
  },
  sixteen: {
    color: '#f9f6f2',
    background: '#f69664',
  },
  thirtyTwo: {
    color: '#f9f6f2',
    background: '#f77c5f',
  },
  sixtyFour: {
    color: '#f9f6f2',
    background: '#f75f3b',
  },
  oneTwoEight: {
    color: '#f9f6f2',
    background: '#edd073',
  },
  twoFiveSix: {
    color: '#f9f6f2',
    background: '#edcc62',
  },
  fiveTwelve: {
    color: '#776e65',
    background: '#eee4da',
  },
  oneZeroTwoFour: {
    color: '#776e65',
    background: '#eee4da',
  },
  TwoZeroFourEight: {
    color: '#776e65',
    background: '#eee4da',
  },
}));

export default function Square(props) {
  const classes = useStyles();

  return (
    <Grid item className={classes.gridItem}>
      {props.number === 0 && (
        <Paper className={`${classes.paper} ${classes.zero}`}>
          {props.number}
        </Paper>
      )}
      {props.number === 2 && (
        <Paper className={`${classes.paper} ${classes.two}`}>
          {props.number}
        </Paper>
      )}
      {props.number === 4 && (
        <Paper className={`${classes.paper} ${classes.four}`}>
          {props.number}
        </Paper>
      )}
      {props.number === 8 && (
        <Paper className={`${classes.paper} ${classes.eight}`}>
          {props.number}
        </Paper>
      )}
      {props.number === 16 && (
        <Paper className={`${classes.paper} ${classes.sixteen}`}>
          {props.number}
        </Paper>
      )}
      {props.number === 32 && (
        <Paper className={`${classes.paper} ${classes.thirtyTwo}`}>
          {props.number}
        </Paper>
      )}
      {props.number === 64 && (
        <Paper className={`${classes.paper} ${classes.sixtyFour}`}>
          {props.number}
        </Paper>
      )}
      {props.number === 128 && (
        <Paper className={`${classes.paper} ${classes.oneTwoEight}`}>
          {props.number}
        </Paper>
      )}
      {props.number === 256 && (
        <Paper className={`${classes.paper} ${classes.twoFiveSix}`}>
          {props.number}
        </Paper>
      )}
      {props.number === 512 && (
        <Paper className={`${classes.paper} ${classes.fiveTwelve}`}>
          {props.number}
        </Paper>
      )}
      {props.number === 1024 && (
        <Paper className={`${classes.paper} ${classes.oneZeroTwoFour}`}>
          {props.number}
        </Paper>
      )}
      {props.number === 2048 && (
        <Paper className={`${classes.paper} ${classes.TwoZeroFourEight}`}>
          {props.number}
        </Paper>
      )}
    </Grid>
  );
}
