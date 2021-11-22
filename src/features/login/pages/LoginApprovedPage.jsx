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
  withTitle,
  withRouter,
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

  componentDidUpdate(prevProps) {
    this.handleLoginNewSession(prevProps);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
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

  resetState = () => {
    this.setState({
      loginNewSessionLoading: false,
      loginNewSessionError: null,
    });
  };

  delayRedirection = () => {
    const {
      timeLeft,
    } = this.state;
    this.timeoutHandle = setTimeout(() => {
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
      loginNewSession,
    } = this.props;

    const {
      loginNewSessionLoading,
      loginNewSessionError,
      timeLeft,
    } = this.state;

    console.log('[LoginPage] Display props:', {
      loginNewSession,
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
