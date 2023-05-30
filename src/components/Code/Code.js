import axios from "../../customize/axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Code = (props) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const firstRunRef = useRef(false);

  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        console.log("API");
        const ssoToken = searchParams.get("ssoToken");
        if (ssoToken && firstRunRef.current === false) {
          firstRunRef.current = true;
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
            navigate("/");
          } else {
            // error
            setMessage(res.EM);
          }
        }
      } catch (error) {
        error.EM && setMessage(error.EM);
        console.log("🏆 ~ error:", error);
      }
    })();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-3">
          {message}
          {message && (
            <span>
              . Please do login again. Click here to&nbsp;
              <a
                href={`${process.env.REACT_APP_BACKEND_SSO}?serviceURL=${process.env.REACT_APP_SERVICE_UTL}`}>
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
