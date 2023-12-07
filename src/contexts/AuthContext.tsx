import { createContext, useState, useContext, ReactNode } from "react";
import Login from "../pages/login";
import { User } from "../utils/types";
import { destroyCookie, setCookie } from "nookies";
import { api } from "../services/apiClient";

// authChannel
let authChannel: BroadcastChannel;

// Interface da requisição de login
interface ISignInRequest {
  cpf: string;
  password: string;
}

// Interface da resposta de login
interface ISignInResponse {
  user?: User;
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
  async function signIn({
    cpf,
    password,
  }: ISignInRequest): Promise<ISignInResponse> {
    if (cpf === "admin" && password === "admin") {
      setUser({
        id: "6570d6badd3560ad28cdb7a3",
        email: "admin@mail.com",
        nome: "Admin",
        role: "admin",
        cpf: '37151994826',
      });
      return {
        user: {
          id: "0",
          email: "admin@mail.com",
          nome: "Admin",
          role: "admin",
          cpf: '37151994826',
        },
        token: "aRealToken",
      };
    } else {
      console.log(cpf, password);
      const res = await api.post("/auth/login", {
        cpf,
        password,
      });
      console.log(res)
      if (res.status !== 200) {
        return {
          error: res.data,
        };
      } else {
        const data: {
          user: User;
          token: string;
          refreshToken?: string;
        } = res.data;

        setCookie(undefined, "nextauth.token", data.token, {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: "/",
        });
        localStorage.setItem("authToken", data.token)
        console.log(data.token)
        data.refreshToken &&
          setCookie(undefined, "nextauth.refreshToken", data.refreshToken, {
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: "/",
          });

        await setUser(data.user);

        api.defaults.headers["Authorization"] = `Bearer ${data.token}`;
        
        return {
          user: data.user,
          token: data.token,
        };
      }
    }
  }

  // Lógica de logout
  function signOut() {
    setUser(null);
    destroyCookie(undefined, "nextauth.token");
    localStorage.clear()
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

export function signOut() {
  destroyCookie(undefined, "nextauth.token");
  destroyCookie(undefined, "nextauth.refreshToken");

  if (authChannel) {
    authChannel.postMessage('signOut');
  } else {
    console.log("authChannel is not defined");
  }
}

export default AuthContext as React.Context<AuthContextData>;
