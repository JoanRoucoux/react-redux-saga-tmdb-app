import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useCookies } from 'react-cookie';
import { LoadingButton } from '@mui/lab';
import { LoginActionTypes } from '../../../login/redux';
import { useDidUpdate } from '../..';

const {
  LOGIN_DELETE_SESSION_REQUEST,
} = LoginActionTypes;

const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies();

  const {
    loading,
    error,
  } = useSelector((state) => state?.LoginDeleteSession);

  const { sessionId } = cookies;
  const handleLogout = () => dispatch({
    type: LOGIN_DELETE_SESSION_REQUEST,
    payload: { sessionId },
  });

  useDidUpdate(() => {
    if (error || loading) {
      return;
    }
    removeCookie('sessionId', { path: '/' });
    navigate('/app/home');
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

export default LogoutButton;
