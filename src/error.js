import React, { useEffect } from "react";
const Error = ({ content, close }) => {
  useEffect(() => {
    setTimeout(() => {
      close();
    }, 2500);
    return () => {
      clearTimeout();
    };
  });

  return (
    <div className='error'>
      <h3>{content}</h3>
    </div>
  );
};
export default Error;
