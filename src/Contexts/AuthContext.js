import React, { useState, createContext } from "react";

export const AuthContext = createContext();
 
function AuthProvider({ children, initialLoggerUser }) {
  const [loggedInUser, setLoggedInUser] = useState(initialLoggerUser);
  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
