import {useDispatch, useSelector} from 'react-redux';
import * as todoActions from '../../redux/auth/action';

export const useAuth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const email = useSelector((state) => state.auth.email);
  const token = useSelector((state) => state.auth.token);
  const error = useSelector((state) => state.auth.error);

  async function dispatchSignup(params) {
    dispatch(todoActions.signup(params));
  }

  async function dispatchSignin(params) {
    dispatch(todoActions.signin(params));
  }

  async function dispatchSignout() {
    dispatch(todoActions.signout());
  }

  return {loading, email, token, error, dispatchSignup, dispatchSignin, dispatchSignout};
};
