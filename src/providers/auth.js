import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);
  return (
    <AuthContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </AuthContext.Provider>
  );
}
