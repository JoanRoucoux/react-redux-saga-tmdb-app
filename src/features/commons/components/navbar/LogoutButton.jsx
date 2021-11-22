import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { LoadingButton } from '@mui/lab';
import { LoginActionTypes } from '../../../login/redux';

const {
  LOGIN_DELETE_SESSION_REQUEST,
} = LoginActionTypes;

const ProfileMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    loading,
    error,
  } = useSelector((state) => state?.LoginDeleteSession);

  const handleLogout = () => dispatch({ type: LOGIN_DELETE_SESSION_REQUEST });

  useEffect(() => {
    if (error) {
      console.log('error on error');
      return;
    }
    if (loading) {
      console.log('loading is loading');
      return;
    }
    console.log('success');
    navigate('app/home');
  }, [
    loading,
    error,
  ]);

  return (
    <LoadingButton
      variant="outlined"
      fullWidth
      onClick={handleLogout}
      loading={loading}
    >
      Logout
    </LoadingButton>
  );
};

export default ProfileMenu;
