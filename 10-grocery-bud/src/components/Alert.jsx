import React, { useEffect } from "react";

const Alert = ({ msg, type, removeAlert, list }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      return removeAlert();
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [list]);

  return (
    <div className="alert">
      <p className={`alert-${type}`}>{msg}</p>
    </div>
  );
};

export default Alert;
