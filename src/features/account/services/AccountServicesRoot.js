import { takeEvery } from 'redux-saga/effects';
import { AccountActionTypes } from '../redux';
import AccountDetailsService from './AccountDetailsService';

const AccountServicesRoot = [
  takeEvery(AccountActionTypes.ACCOUNT_DETAILS_REQUEST, AccountDetailsService),
];

export default AccountServicesRoot;
