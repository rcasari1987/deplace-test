/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Button,
  Toolbar,
  Hidden,
} from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';

import useRouter from 'utils/useRouter';
/* import { logout } from 'actions'; */

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  logoutButton: {
    marginLeft: theme.spacing(1)
  },
  logoutIcon: {
    marginRight: theme.spacing(1)
  }
}));

const TopBar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const { history } = useRouter();
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const handleLogout = () => {
    history.push('/auth/login');
    // dispatch(logout());
  };

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    /* color="primary" */
    >
      <Toolbar>
        <RouterLink to="/characters'">
          <img
            alt="Logo"
            src="/images/logos/deplace_logo.png"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <Button
            className={classes.logoutButton}
            color="inherit"
            onClick={handleLogout}
          >
            <InputIcon className={classes.logoutIcon} />
          </Button>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
