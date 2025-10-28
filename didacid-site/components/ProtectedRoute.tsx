import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user || !user.isSubscribed) {
    return <Navigate to="/pricing" state={{ from: location, message: "Cette zone est réservée aux abonnés." }} replace />;
  }

  return children;
};

export default ProtectedRoute;