import { createContext, useState, useContext, ReactNode } from "react";
import Login from "../src/pages/login";

// Interface do usuário
interface User {
  email: string;
  name?: string;
}

// Interface da requisição de login
interface ISignInRequest {
  email: string;
  password: string;
}

// Interface da resposta de login
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
  const [user, setUser] = useState<User | null>();

  // Lógica de autenticação
  async function signIn({ email, password }: ISignInRequest) {
    setUser({
      email: email,
      name: "User Name",
    });
    return {
      user: {
        email: email,
        name: "User Name",
      },
      token: "",
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

// Higher Order Component para autenticação
export function withAuth(Component) {
  const Auth = (props) => {
    const { user } = useContext(AuthContext);

    // check if user have token
    // if not, redirect to login page

    // check if user token is valid
    // if not, redirect to login page

    if (user) {
      return <Component {...props} />;
    } else return <Login />;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
}

export default AuthContext as React.Context<AuthContextData>;
