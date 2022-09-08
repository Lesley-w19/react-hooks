import React from "react";
import {
  useLocation,
  useNavigate,

} from "react-router-dom";
const Footer = () => {
  let navigate = useNavigate();
  //   console.log(navigate);

  const gotoContact = () => {
    navigate("/contact");
  };

  let location = useLocation();
//   console.log(location);

  return (
    <>
      <button className="btn btn-success">Go back</button>
      <button className="btn btn-primary">Go forward</button>
      <button className="btn btn-warning">Replace</button>
      <div>{location.pathname}</div>
      <button className="btn btn-info">Push</button>
      <button className="btn btn-dark" onClick={gotoContact}>
        Go to contact
      </button>
    </>
  );
};
export default Footer;
