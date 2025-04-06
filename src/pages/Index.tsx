
import React from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Use Navigate component instead of useNavigate hook + useEffect
  return <Navigate to="/" replace />;
};

export default Index;
