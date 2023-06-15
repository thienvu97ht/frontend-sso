import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { doLogin } from "../../redux/action/accountAction";

const Code = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const message = useSelector((state) => state.account.errMessage);
  const user = useSelector((state) => state.account.userInfo);

  const firstRunRef = useRef(false);

  useEffect(() => {
    const ssoToken = searchParams.get("ssoToken");
    if (ssoToken && firstRunRef.current === false) {
      firstRunRef.current = true;
      dispatch(doLogin(ssoToken));
    }
  }, []);

  useEffect(() => {
    if (user && user.access_token) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-3">
          {message}
          {message && (
            <span>
              . Please do login again. Click here to&nbsp;
              <a
                href={`${process.env.REACT_APP_BACKEND_SSO_LOGIN}?serviceURL=${process.env.REACT_APP_CURRENT_PROJECT_URL}`}>
                Login
              </a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Code;
