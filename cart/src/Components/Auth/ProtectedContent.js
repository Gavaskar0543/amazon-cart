import React, { useState } from 'react';
import jwt from 'jsonwebtoken';

const ProtectedContent = () => {
  const [decodedJwt, setDecodedJwt] = useState(null);

  const verifyJwt = () => {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      const decodedJwt = jwt.decode(jwtToken);
      setDecodedJwt(decodedJwt);
    }
  };

  useEffect(() => {
    verifyJwt();
  }, []);

  if (!decodedJwt) {
    return <div>Please log in to access this content.</div>;
  }

  return (
    <div>
      <h1>Protected Content</h1>
      <p>Welcome, {decodedJwt.name}!</p>
    </div>
  );
};

export default ProtectedContent;
