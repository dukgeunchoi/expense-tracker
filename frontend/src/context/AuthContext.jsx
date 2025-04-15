import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (userData) => {
    setUser(userData);
  };

  const clearUser = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ updateUser, clearUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
