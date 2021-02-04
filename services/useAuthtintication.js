import React, { useState, useEffect, useContext, createContext } from "react";
import { useRouter } from "next/router";
import { clientHttp } from "./clientHttp";

const authContext = createContext();
const authUser = false; // localStorage.getItem("authUser");\

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProviderAuth() {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const login = (email, password) =>
    clientHttp.get("../sanctum/csrf-cookie").then(() =>
      clientHttp
        .post("../login", { email, password })
        .then((data) => {
          fetchUser();
          router.push("/customers");
          return data;
        })
        .catch((error) => console.log(error))
    );

  const logout = () =>
    clientHttp.post("../logout").then((data) => {
      setUser(false);

      return data;
    });

  const fetchUser = async () => {
    try {
      const { data, status } = await clientHttp.get("user");
      console.log({ status });
      if (status !== 200) {
        const dataSantum = await clientHttp.get("../sanctum/csrf-cookie");
        setUser(false);
        return;
      }
      setUser(data);
      setLoading(false);
    } catch (error) {
      setUser(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    const redirectHome = () => {
      if (["/login", "/logout"].includes(router.pathname) && user !== false) {
        router.push("/customers");
      }
    };

    redirectHome();
  }, [user]);

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
    login,
    logout,
    loading,
    fetchUser,
  };
}
