import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

import BasePage from "../components/utils/basePage";
import BaseFooter from "../components/utils/baseFooter";
import LocalList from "../components/list/localList";
import Button from "../components/utils/button";
import SyncList from "../components/list/syncList";

export default function List() {
  const { data: sessionData } = useSession();

  return (
    <BasePage>
      <div className="w-full max-w-3xl">
        <div className="my-2 flex items-center justify-between ">
          <Link href={"/"}>
            <h2 className="text-2xl">Home</h2>
          </Link>
          <div>
            {sessionData ? (
              <span> Hello {sessionData.user.name} </span>
            ) : (
              <span className="mx-2">Hello guest</span>
            )}
            <Button
              name={sessionData ? "Sign out" : "Sign in"}
              onClick={sessionData ? () => void signOut() : () => void signIn()}
            />
          </div>
        </div>
        <h1 className="py-5 text-center text-4xl">To-do List</h1>
        {sessionData ? <SyncList /> : <LocalList />}
        <BaseFooter />
      </div>
    </BasePage>
  );
}
