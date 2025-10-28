import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PremiumRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  // Premium access is granted to subscribers OR users with a one-time active ticket
  if (!user || (!user.isSubscribed && !user.hasActiveTicket)) {
    // Redirect to a page that explains how to get premium access
    return <Navigate to="/pricing" state={{ from: location, message: "Vous devez acheter une session pour accéder au support premium." }} replace />;
  }

  return children;
};

export default PremiumRoute;