import { BasePage } from "@/components/utils";
import Image from "next/image";

import { Outfit } from "@next/font/google";

const outfit_400 = Outfit({ weight: ["400"], subsets: ["latin"] });
const outfit_700 = Outfit({ weight: ["700"], subsets: ["latin"] });

export default function QrCode() {
  return (
    <BasePage
      title="Frontend Mentor | QR code component"
      className="flex max-w-sm items-center justify-center py-4"
    >
      <div className={outfit_700.className}>
        <div className=" bg-white p-4 text-black">
          <Image
            alt="QR-code"
            src="/challenges/qr_code/image-qr-code.png"
            width={576}
            height={576}
            priority
          />
          <div className="m-4 text-center">
            <h1 className=" text-md my-4 text-center sm:text-2xl">
              Improve your front-end skills by building projects Scan the QR
              code
            </h1>
            <div className={outfit_400.className}>
              <div className="text-sm sm:text-xl">
                <h2>
                  To visit Frontend Mentor and take your coding skills to the
                  next level
                </h2>
                <div className="my-2 text-xs sm:text-sm">
                  Challenge by Frontend Mentor Coded by Diogo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasePage>
  );
}
