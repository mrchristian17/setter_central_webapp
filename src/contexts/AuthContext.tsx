import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

interface IAuthContext {
  currentUser: User | null;
}

const initialContext: IAuthContext = {
  currentUser: null,
};

const AuthContext = createContext<IAuthContext>(initialContext);

interface AuthProviderProps {
  children: React.ReactNode;
}
export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] =
    useState<IAuthContext["currentUser"]>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
