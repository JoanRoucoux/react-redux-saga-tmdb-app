import React, { Component } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  Typography,
} from '@mui/material';
import {
  Reduxify,
  WindowNavigationFunctions,
} from '../../../core';
import { withTitle } from '../../commons';
import {
  ApiError,
  Loader,
} from '../../commons/components';
import {
  LoginProvider,
  LoginDispatcher,
} from '../redux';

const {
  windowLocationReplace,
} = WindowNavigationFunctions;

const {
  LoginNewTokenFragment,
} = LoginProvider;

@withTitle('Login')
@Reduxify((state) => ({
  // define state to extract
  ...LoginNewTokenFragment(state),
}), {
  // define actions to execute
  ...LoginDispatcher,
})
class LoginPage extends Component {
  // initial state
  state = {
    loginNewTokenLoading: false,
    loginNewTokenError: null,
  };

  // did mount staff
  componentDidMount() {}

  componentDidUpdate(prevProps) {
    this.handleLoginNewToken(prevProps);
  }

  handleLogin = () => {
    const {
      requestLoginNewToken,
    } = this.props;
    requestLoginNewToken();
  };

  handleLoginNewToken = (prevProps) => {
    if (this.isLoginNewTokenLoading(prevProps)) {
      this.showLoading();
    } else if (this.isLoginNewTokenFail(prevProps)) {
      this.showError();
    } else if (this.isLoginNewTokenSuccess(prevProps)) {
      this.navigateToAuthenticationProcess();
    }
  };

  isLoginNewTokenLoading = (prevProps) => {
    if (('loginNewTokenLoading' in this.props)
        && ('loginNewTokenLoading' in prevProps)) {
      const { loginNewTokenLoading } = this.props;
      if (loginNewTokenLoading !== prevProps.loginNewTokenLoading
          && loginNewTokenLoading === true) {
        return true;
      }
    }
    return false;
  };

  isLoginNewTokenFail = (prevProps) => {
    if (('loginNewTokenError' in this.props)
        && ('loginNewTokenError' in prevProps)) {
      const { loginNewTokenError } = this.props;
      if (loginNewTokenError !== prevProps.loginNewTokenError) {
        return true;
      }
    }
    return false;
  };

  isLoginNewTokenSuccess = (prevProps) => {
    if ('requestToken' in this.props
        && 'requestToken' in prevProps) {
      const { requestToken } = this.props;
      if (requestToken
          && requestToken !== prevProps.requestToken) {
        return true;
      }
    }
    return false;
  };

  showLoading = () => {
    this.setState({
      loginNewTokenLoading: true,
      loginNewTokenError: null,
    });
  };

  showError = () => {
    this.setState({
      loginNewTokenLoading: false,
      loginNewTokenError: 'err_default',
    });
  };

  navigateToAuthenticationProcess = () => {
    const {
      requestToken,
    } = this.props;
    const href = `https://www.themoviedb.org/authenticate/${requestToken}`
    + '?redirect_to=http://localhost:3000/login/approved';
    windowLocationReplace(href);
  };

  render() {
    const {
      requestToken,
    } = this.props;

    const {
      loginNewTokenLoading,
      loginNewTokenError,
    } = this.state;

    console.log('[LoginPage] Display props:', {
      requestToken,
    });

    console.log('[LoginPage] Display state:', {
      loginNewTokenLoading,
      loginNewTokenError,
    });

    return (
      <>
        {(loginNewTokenLoading && <Loader />)
        || (loginNewTokenError && <ApiError />)
        || (
          <Box
            sx={{
              backgroundColor: 'background.default',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'center',
            }}
          >
            <Container maxWidth="sm">
              <Card>
                <CardContent
                  style={{
                    padding: 32,
                  }}
                >
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      color="textPrimary"
                      variant="h2"
                      gutterBottom
                    >
                      Log in
                    </Typography>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      In order to use the editing and rating capabilities of TMDb,
                      as well as get personal recommendations you will need to login to your account.
                      If you do not have an account, registering for an account is free and simple.
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      color="primary"
                      fullWidth
                      size="large"
                      variant="contained"
                      onClick={this.handleLogin}
                    >
                      Log in now
                    </Button>
                  </Box>
                  <Divider
                    style={{
                      marginTop: 24,
                      marginBottom: 24,
                    }}
                  />
                  <Link
                    href="https://www.themoviedb.org/signup"
                    color="textSecondary"
                    variant="body1"
                    style={{
                      display: 'block',
                    }}
                  >
                    Create new account
                  </Link>
                  <Link
                    href="https://www.themoviedb.org/reset-password"
                    color="textSecondary"
                    variant="body1"
                    style={{
                      display: 'block',
                      marginTop: 8,
                    }}
                  >
                    Forgot password
                  </Link>
                </CardContent>
              </Card>
            </Container>
          </Box>
        )}
      </>
    );
  }
}

export default LoginPage;
