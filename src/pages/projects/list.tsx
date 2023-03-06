import { signIn, signOut, useSession } from "next-auth/react";

import { BasePage, BaseFooter, Button } from "@/components/utils";
import { LocalList, SyncList } from "@/components/list";

export default function List() {
  const { data: sessionData } = useSession();

  return (
    <BasePage title="To-do List" className="w-full max-w-3xl">
      <div className="m-2  flex flex-col items-center us:flex-row us:justify-between ">
        <h2 className="text-2xl">To-do List</h2>
        <div className="flex items-center">
          {sessionData ? (
            <span> Hello, {sessionData.user.name} </span>
          ) : (
            <span className="mx-2">Hello, guest</span>
          )}
          <Button
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {sessionData ? "Logout" : "Login"}
          </Button>
        </div>
      </div>
      {sessionData ? <SyncList /> : <LocalList />}
      <BaseFooter />
    </BasePage>
  );
}
