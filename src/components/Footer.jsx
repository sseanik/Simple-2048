import React from 'react';
// Material UI
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    width: '100%',
    padding: theme.spacing(2, 0),
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
    position: 'fixed',
    bottom: '0px',
    left: '0px',
    right: '0px',
    marginBottom: '0px',
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function Footer() {
  const classes = useStyles();
  const [time, setTime] = React.useState(new Date().toLocaleString());

  React.useEffect(() => {
    const timeDisplay = setInterval(() => {
      const date = new Date().toLocaleString();
      setTime(date);
    }, 1000);
    return () => {
      clearInterval(timeDisplay);
    };
  }, []);

  return (
    <footer className={classes.footer}>
      <Container maxWidth='sm'>
        <Typography variant='body1'>Use the Arrow Keys to play</Typography>
        <Typography variant='body2' color='textSecondary'>
          {time}
        </Typography>
      </Container>
    </footer>
  );
}
