import Image from "next/image";

export default function BaseFooter() {
  return (
    <>
      <footer className="relative bottom-0 w-full px-4 py-4">
        <div className="mx-auto flex flex-col items-center justify-between sm:flex-wrap ">
          <div className="bas m-4 flex items-center justify-center gap-4">
            <a href="https://github.com/IcTxDiogo/">
              <Image
                src="/github.png"
                alt="gitHub profile"
                width={32}
                height={32}
              />
            </a>
            <a href="www.linkedin.com/in/diogofrancasantos">
              <Image
                src="/linked.png"
                alt="linkedin profile"
                width={32}
                height={32}
              />
            </a>
          </div>
          <p>&copy; 2023 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
