const LoginNewTokenFragment = (state) => ({
  requestToken: state?.LoginNewToken?.requestToken,
  loginNewTokenLoading: state?.LoginNewToken?.loading,
  loginNewTokenError: state?.LoginNewToken?.error,
});

const LoginNewSessionFragment = (state) => ({
  sessionId: state?.LoginNewSession?.sessionId,
  loginNewSessionLoading: state?.LoginNewSession?.loading,
  loginNewSessionError: state?.LoginNewSession?.error,
});

const LoginDeleteSessionFragment = (state) => ({
  loginDeleteSessionLoading: state?.LoginDeleteSession?.loading,
  loginDeleteSessionError: state?.LoginDeleteSession?.error,
});

const LoginProvider = {
  LoginNewTokenFragment,
  LoginNewSessionFragment,
  LoginDeleteSessionFragment,
};

export default LoginProvider;
