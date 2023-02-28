import BasePage from "../components/utils/basePage";
import BaseFooter from "../components/utils/baseFooter";
import { signIn, signOut, useSession } from "next-auth/react";
import LocalList from "../components/list/localList";
import Button from "../components/utils/button";
import SyncList from "../components/list/syncList";

export default function List() {
  const { data: sessionData } = useSession();

  return (
    <BasePage>
      <div className="w-full max-w-3xl">
        <div className="flex items-center justify-between">
          <h1 className="py-5 text-center text-4xl">To-do List</h1>
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
        {sessionData ? <SyncList /> : <LocalList />}
        <BaseFooter />
      </div>
    </BasePage>
  );
}
