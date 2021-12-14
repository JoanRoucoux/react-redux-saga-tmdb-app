import React, { Component } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from '@mui/material';
import { Reduxify } from '../../../core';
import {
  withCookies,
  withRouter,
  withTitle,
} from '../../commons';
import {
  ApiError,
  Loader,
} from '../../commons/components';
import {
  LoginProvider,
  LoginDispatcher,
} from '../redux';

const {
  LoginNewTokenFragment,
  LoginNewSessionFragment,
} = LoginProvider;

@withCookies
@withRouter
@withTitle('Login Approved')
@Reduxify((state) => ({
  // define state to extract
  ...LoginNewTokenFragment(state),
  ...LoginNewSessionFragment(state),
}), {
  // define actions to execute
  ...LoginDispatcher,
})
class LoginApprovedPage extends Component {
  // initial state
  state = {
    loginNewSessionLoading: false,
    loginNewSessionError: null,
    timeLeft: 5,
  };

  // did mount staff
  componentDidMount() {
    this.initPage();
  }

  componentDidUpdate(prevProps, prevState) {
    const { timeLeft } = this.state;
    if (prevState.timeLeft === timeLeft) {
      this.handleLoginNewSession(prevProps);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }

  initPage = () => {
    const {
      searchParams,
      requestLoginNewSession,
    } = this.props;
    const requestToken = searchParams.get('request_token');
    const isTokenApproved = searchParams.get('approved');
    if (isTokenApproved) {
      requestLoginNewSession({ requestToken });
    }
  };

  handleLoginNewSession = (prevProps) => {
    if (this.isLoginNewSessionLoading(prevProps)) {
      this.showLoading();
    } else if (this.isLoginNewSessionFail(prevProps)) {
      this.showError();
    } else if (this.isLoginNewSessionSuccess(prevProps)) {
      this.saveSessionId();
      this.resetState();
      this.delayRedirection();
    }
  };

  isLoginNewSessionLoading = (prevProps) => {
    if (('loginNewSessionLoading' in this.props)
        && ('loginNewSessionLoading' in prevProps)) {
      const { loginNewSessionLoading } = this.props;
      if (loginNewSessionLoading !== prevProps.loginNewSessionLoading
          && loginNewSessionLoading === true) {
        return true;
      }
    }
    return false;
  };

  isLoginNewSessionFail = (prevProps) => {
    if (('loginNewSessionError' in this.props)
        && ('loginNewSessionError' in prevProps)) {
      const { loginNewSessionError } = this.props;
      if (loginNewSessionError !== prevProps.loginNewSessionError) {
        return true;
      }
    }
    return false;
  };

  isLoginNewSessionSuccess = (prevProps) => {
    if ('sessionId' in this.props
        && 'sessionId' in prevProps) {
      const { sessionId } = this.props;
      if (sessionId
          && sessionId !== prevProps.sessionId) {
        return true;
      }
    }
    return false;
  };

  showLoading = () => {
    this.setState({
      loginNewSessionLoading: true,
      loginNewSessionError: null,
    });
  };

  showError = () => {
    this.setState({
      loginNewSessionLoading: false,
      loginNewSessionError: 'err_default',
    });
  };

  saveSessionId = () => {
    const {
      setCookie,
      sessionId,
    } = this.props;
    const oneHour = new Date(Date.now() + 3600000);
    setCookie(
      'sessionId',
      sessionId, {
        path: '/',
        expires: oneHour,
      },
    );
  };

  resetState = () => {
    this.setState({
      loginNewSessionLoading: false,
      loginNewSessionError: null,
    });
  };

  delayRedirection = () => {
    this.intervalHandle = setInterval(() => {
      const { timeLeft } = this.state;
      if (timeLeft <= 0) {
        this.navigateToHomePage();
      } else {
        this.setState((prevState) => ({ timeLeft: prevState.timeLeft - 1 }));
      }
    }, 1000);
  };

  navigateToHomePage = () => {
    const {
      navigate,
    } = this.props;
    navigate('/app/home');
  };

  render() {
    const {
      sessionId,
    } = this.props;

    const {
      loginNewSessionLoading,
      loginNewSessionError,
      timeLeft,
    } = this.state;

    console.log('[LoginPage] Display props:', {
      sessionId,
    });

    console.log('[LoginPage] Display state:', {
      loginNewSessionLoading,
      loginNewSessionError,
      timeLeft,
    });

    const timerMessage = `You will be automatically redirected in ${timeLeft}s.`;

    return (
      <>
        {(loginNewSessionLoading && <Loader />)
        || (loginNewSessionError && <ApiError />)
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
                <CardContent style={{ padding: 32 }}>
                  <Box
                    sx={{
                      mb: 3,
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      color="textPrimary"
                      variant="h2"
                      gutterBottom
                    >
                      Success!
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="body2"
                      gutterBottom
                    >
                      {timerMessage}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      color="primary"
                      fullWidth
                      size="large"
                      variant="contained"
                      onClick={this.navigateToHomePage}
                    >
                      Go back home now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Container>
          </Box>
        )}
      </>
    );
  }
}

export default LoginApprovedPage;
