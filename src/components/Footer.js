import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Footer = () => {
  let navigate = useNavigate();
  //   console.log(navigate);

  const gotoContact = () => {
    navigate("/contact", {
      replace: true,
    });
  };

  const goBack = () => {
    navigate(-1);
  };
  let location = useLocation();
  //   console.log(location);

  const redirectToAbout = () => {
    navigate("/about?name=js", {
      state: {
        name: "React and Vue",
        message: "Message from any component",
      },
    });
  };

  useEffect(() => {
    console.log(location.search);
    if (location.search) {
      // perform any action
      console.log("search", location.search);
    }
  }, [location]);

  return (
    <>
      <button className="btn btn-success" onClick={goBack}>
        Go Back
      </button>
      {/* <button className="btn btn-primary">Go forward</button>
      <button className="btn btn-warning">Replace</button> */}
      <button className="btn btn-info" onClick={redirectToAbout}>
        Redirect to about
      </button>{" "}
      <div>{location.pathname}</div>
      <button className="btn btn-dark" onClick={gotoContact}>
        Go to contact
      </button>
    </>
  );
};
export default Footer;
