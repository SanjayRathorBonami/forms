import React from "react";

const Error = ({ message }) => {
  return (
    <div className="border border-error px-4 py-2 rounded-md max-w-fit">
      <p className="text-error">{message}</p>
    </div>
  );
};

export default Error;
