import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('didacid_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const updateUserInStorage = (user: User | null) => {
    if (user) {
      localStorage.setItem('didacid_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('didacid_user');
    }
    setUser(user);
  };

  const login = (name: string) => {
    const newUser: User = { name, isSubscribed: true, hasActiveTicket: false };
    updateUserInStorage(newUser);
  };

  const logout = () => {
    updateUserInStorage(null);
  };
  
  const startPremiumSession = (name: string) => {
     const ticketUser: User = { name, isSubscribed: false, hasActiveTicket: true };
     updateUserInStorage(ticketUser);
  };

  const endPremiumSession = () => {
      // For a non-subscribed user, ending the session means logging them out.
      // A subscribed user would keep their account but this is for one-time users.
      updateUserInStorage(null);
  };


  return (
    <AuthContext.Provider value={{ user, login, logout, startPremiumSession, endPremiumSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};