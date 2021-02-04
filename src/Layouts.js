import Head from "next/head";
import Link from "next/link";
import React from "react";
import Header from "./Header/Header";
import { Target, Users } from "react-feather";
import { useRequireAuth } from "../services/useIsRequiredAuth";
import LoadingComponent from "./common/LoadingComponent";
import Button from "./common/Button";

const ItemsMenu = () => {
  return (
    <div className="flex gap-4">
      <Link href="/customers">
        <a className="hover:bg-blue-500 rounded-sm p-2 flex gap-2">
          <Users /> <div> Customers</div>
        </a>
      </Link>
    </div>
  );
};

const Layouts = ({ children, title, loading }) => {
  const { user, logout } = useRequireAuth();

  if (!user) {
    return <LoadingComponent />;
  }
  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <Head>
        <title>Mil Boletos | {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        childrenLeft={<ItemsMenu />}
        childrenRight={
          <div className="flex items-center gap-3">
            <div>{user.name}</div>
            <div>
              <Button
                icon="LogOut"
                label="Logout"
                onClick={logout}
                variant="transparent"
              />
            </div>
          </div>
        }
      />
      {loading ? (
        <LoadingComponent />
      ) : (
        <main className="container w-4/5 mx-auto mt-8 ">{children}</main>
      )}
    </div>
  );
};

export default Layouts;
