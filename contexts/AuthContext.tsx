import { createContext, useState, useContext, ReactNode } from "react";

// Interface do usuário
interface User {
  email: string;
  name?: string;
}

interface ISignInRequest {
  email: string;
  password: string;
}

interface ISignInResponse {
  user?: {
    name: string;
    email: string;
  };
  token?: string;
  error?: string;
}

// Interface do contexto
interface AuthContextData {
  user: User | null;
  signIn: (credentials: ISignInRequest) => Promise<ISignInResponse>;
  signOut: () => void;
}

// Interface das props
interface AuthProviderProps {
  children: ReactNode;
}

// Contexto
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// Provider
export function AuthContextProvider({ children }: AuthProviderProps) {
  // Estado do usuário
  const [user, setUser] = useState<User | null>({
    email: "ricardofsdomene@icloud.com",
    name: "Ricardo Fonseca",
  });

  // Lógica de autenticação
  async function signIn({ email, password }: ISignInRequest) {
    return {
      error: "Usuário ou senha inválidos",
    };
  }

  // Lógica de logout
  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook de uso do contexto
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext as React.Context<AuthContextData>;
