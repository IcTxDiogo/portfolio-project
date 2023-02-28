import { signIn, signOut, useSession } from "next-auth/react";
import BasePage from "../components/utils/basePage";
import BaseFooter from "../components/utils/baseFooter";
import Button from "../components/utils/button";

export default function LoggedList() {
  const { data: sessionData } = useSession();
  console.log(sessionData);

  return (
    <>
      <BasePage>
        <div className="w-full max-w-3xl">
          <Button
            name={sessionData ? "Sign out" : "Sign in"}
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          />

          <BaseFooter />
        </div>
      </BasePage>
    </>
  );
}
