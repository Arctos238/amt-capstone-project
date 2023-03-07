import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const useStyles = makeStyles({
  buttons: {
    '&:hover': {
      cursor: 'default',
    },
  },
  icon: {
    fontSize: '60px',
    color: 'inherit',
    '&:hover': {
      cursor: 'pointer',
      color: '#fdb900',
    },
  },
});

function BackButton() {
  const classes = useStyles();

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className={classes.buttons}>
      <ArrowBackIcon onClick={handleGoBack} className={classes.icon} />
    </div>
  );
}

export default BackButton;
