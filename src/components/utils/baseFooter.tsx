import Image from "next/image";

export default function BaseFooter() {
  return (
    <>
      <footer className="bg-gray-800 py-4 text-white">
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <p>&copy; 2023 My Portfolio. All rights reserved.</p>
          <div className="flex justify-center gap-4">
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
                alt="gitHub profile"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
