import Button from "./button";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineHome } from "react-icons/ai";
import { iconSize, socialIconSize } from ".";

interface BaseFooterProps {
  isHome?: true;
}

export default function BaseFooter({ isHome }: BaseFooterProps) {
  return (
    <>
      <footer className="mt-2 w-full border-t-2 border-gray-500 p-2 text-center">
        <div className="mx-auto flex flex-col items-center justify-between gap-2 sm:flex-wrap ">
          <div
            className={`flex w-full flex-col items-center gap-2 us:flex-row ${
              !isHome ? "us:justify-between" : "us:justify-center"
            } `}
          >
            {!isHome && (
              <Link href={"/"}>
                <Button>
                  <AiOutlineHome size={iconSize} />
                </Button>
              </Link>
            )}
            <div className="flex items-center gap-4">
              <Link href="https://github.com/IcTxDiogo/">
                <AiFillGithub size={socialIconSize} />
              </Link>
              <Link href="https://linkedin.com/in/diogofrancasantos">
                <AiFillLinkedin size={socialIconSize} />
              </Link>
            </div>
          </div>
          <span>&copy; 2023 My Portfolio. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
