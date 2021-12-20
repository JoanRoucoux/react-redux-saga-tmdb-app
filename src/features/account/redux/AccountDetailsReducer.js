import { Matcher } from '../../../core';
import AccountActionTypes from './AccountActionTypes';

const initialState = {
  accountDetails: null,
  loading: false,
  error: null,
};

const AccountDetailsReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === AccountActionTypes.ACCOUNT_DETAILS_REQUEST,
    () => ({
      ...state,
      accountDetails: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === AccountActionTypes.ACCOUNT_DETAILS_REQUEST_SUCCESS,
    () => ({
      ...state,
      accountDetails: action.accountDetails,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === AccountActionTypes.ACCOUNT_DETAILS_REQUEST_FAILURE,
    () => ({
      ...state,
      accountDetails: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default AccountDetailsReducer;
