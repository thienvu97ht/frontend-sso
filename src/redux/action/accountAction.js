import axios from "../../customize/axios";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";

export const doLogin = (ssoToken) => {
  return async (dispatch, getState) => {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_VERIFY_TOKEN,
        {
          ssoToken,
        },
        {
          withCredentials: true,
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
      }
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAILED,
        error: error?.EM || "Something wrong...",
      });
    }
  };
};
