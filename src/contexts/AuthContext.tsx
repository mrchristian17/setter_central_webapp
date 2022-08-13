import React, { createContext, useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import type { User } from "firebase/auth";
import { onAuthStateChanged,signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, updatePassword, updateEmail } from "firebase/auth"

interface IAuthContext {
    currentUser: User | null;
    
}

const initialContext: IAuthContext = {
    currentUser: null,
}

const AuthContext = createContext<IAuthContext>(initialContext);

interface AuthProviderProps {
    children: React.ReactNode;
}
export function AuthProvider({children}: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<IAuthContext["currentUser"]>(null);
  const [loading, setLoading] = useState(true);

  // function signup(email:string, password:string) {
  //   return createUserWithEmailAndPassword(auth, email, password)
  // }

  // function login(email:string, password:string) {
  //   return signInWithEmailAndPassword(auth, email, password);
  // }

  // function logout() {
  //   return auth.signOut()
  // }

  // function resetPassword(email:string) {
  //   return sendPasswordResetEmail(auth, email);
  // }

  // function updateEmailFunc(email:string) {
  //   return updateEmail(currentUser!, email);
  // }

  // function updatePasswordFunc(password:string) {
  //   return updatePassword(currentUser!, password)
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, []);

  const value = {
    currentUser,
    // login,
    // signup,
    // logout,
    // resetPassword,
    // updateEmail,
    // updatePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
    return useContext(AuthContext)
}