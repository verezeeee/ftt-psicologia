import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";
import { signOut } from "../contexts/AuthContext";
import { AuthTokenError } from "./apiTokenError";

let isRefreshing = false;
let failedRequestQueue = [];

export function setupAPIClient(ctx = null) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    // baseURL: "https://membros-375000.rj.r.appspot.com",
    baseURL: "http://localhost:8080",
    headers: {
      Authorization: `Bearer ${cookies["nextauth.token"]}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      console.log(JSON.stringify(error));

      if (error.message === "Network Error") {
        return {
          status: 500,
          data: "Erro ao conectar com o servidor",
        };
      } else {
        if (error.response.status === 401) {
          if (error.response.data === "token.expired") {
            cookies = parseCookies(ctx);
            const { "nextauth.refreshToken": refreshToken } = cookies;
            const originalConfig = error.config;

            if (!isRefreshing) {
              isRefreshing = true;
              console.log("refresh");

              api
                .post("/refresh", {
                  refreshToken,
                })
                .then((response) => {
                  const { token } = response.data;

                  setCookie(ctx, "nextauth.token", token, {
                    maxAge: 60 * 60 * 24 * 30, // 30 days
                    path: "/",
                  });
                  setCookie(
                    ctx,
                    "nextauth.refreshToken",
                    response.data.refreshToken,
                    {
                      maxAge: 60 * 60 * 24 * 30, // 30 days
                      path: "/",
                    }
                  );

                  api.defaults.headers["Authorization"] = `Bearer ${token}`;

                  failedRequestQueue.forEach((request) =>
                    request.onSuccess(token)
                  );
                  failedRequestQueue = [];
                })
                .catch((err) => {
                  failedRequestQueue.forEach((request) =>
                    request.onFailure(err)
                  );
                  failedRequestQueue = [];

                  if (typeof window !== "undefined") {
                    signOut();
                  } else {
                    return Promise.reject(new AuthTokenError());
                  }
                })
                .finally(() => {
                  isRefreshing = false;
                });
            }

            return new Promise((resolve, reject) => {
              failedRequestQueue.push({
                onSuccess: (token: string) => {
                  originalConfig.headers["Authorization"] = `Bearer ${token}`;

                  resolve(api(originalConfig));
                },
                onFailure: (err: AxiosError) => {
                  reject(err);
                },
              });
            });
          } else {
            if (typeof window !== "undefined") {
              signOut();
            } else {
              return Promise.reject(new AuthTokenError());
            }
          }
        }
      }
    }
  );

  return api;
}
