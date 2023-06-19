import axios from "../../customize/axios";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";

export const USER_LOGOUT_REQUEST = "USER_LOGOUT_REQUEST";
export const USER_LOGOUT_FAILED = "USER_LOGOUT_FAILED";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";

export const doLogin = (ssoToken) => {
  return async (dispatch, getState) => {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_SSO_VERIFY_TOKEN,
        {
          ssoToken,
        }
      );

      if (res && +res.EC === 0) {
        // success
        dispatch({
          type: USER_LOGIN_SUCCESS,
          user: res.DT,
        });
      } else {
        // error
        dispatch({
          type: USER_LOGIN_FAILED,
          error: res.EM,
        });

        if (window.location.href !== "/") {
          window.location.href = `${process.env.REACT_APP_BACKEND_SSO_LOGIN}?serviceURL=${process.env.REACT_APP_CURRENT_PROJECT_URL}`;
        }
      }
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAILED,
        error: error?.EM || "Something wrong...",
      });
    }
  };
};

export const doGetAccount = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_SSO_GET_ACCOUNT}`
      );

      if (res && +res.EC === 0) {
        // success
        dispatch({
          type: USER_LOGIN_SUCCESS,
          user: res.DT,
        });
      } else {
        // error
        dispatch({
          type: USER_LOGIN_FAILED,
          error: res.EM,
        });
      }
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAILED,
        error: error?.EM || "Something wrong...",
      });
    }
  };
};

export const doLogOut = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: USER_LOGOUT_REQUEST,
    });
    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_SSO_LOGOUT,
        {}
      );

      if (res && +res.EC === 0) {
        // success
        dispatch({
          type: USER_LOGOUT_SUCCESS,
        });
        window.location.href = "/";
      } else {
        // error
        dispatch({
          type: USER_LOGOUT_FAILED,
          error: res.EM,
        });
      }
    } catch (error) {
      dispatch({
        type: USER_LOGOUT_FAILED,
        error: error?.EM || "Something wrong...",
      });
    }
  };
};
