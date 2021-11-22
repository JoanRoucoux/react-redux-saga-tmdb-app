import AccountActionTypes from './AccountActionTypes';

const {
  ACCOUNT_DETAILS_REQUEST,
} = AccountActionTypes;

const AccountDispatcher = {
  requestAccountDetails: (data) => ({
    type: ACCOUNT_DETAILS_REQUEST,
    payload: data,
  }),
};

export default AccountDispatcher;
