import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const Code = (props) => {
  const [searchParams] = useSearchParams();
  const firstRunRef = useRef(false);

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
            }
          );
          console.log("🏆 ~ res:", res);
        }
      } catch (error) {
        console.log("🏆 ~ error:", error);
      }
    })();
  }, []);

  console.log("RENDER");
  return <div>Code</div>;
};

export default Code;
