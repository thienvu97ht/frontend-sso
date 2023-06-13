import { useEffect } from "react";
import axios from "../../customize/axios";

const About = () => {
  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:8081/health").then((res) => {
        console.log("🏆 ~ axios.get ~ res:", res);
      });
    }, 0);
  }, []);

  return (
    <>
      <button className="btn btn-primary">About me</button>
    </>
  );
};

export default About;
