import { BasePage } from "@/components/utils";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";

const menuItem = ["Home", "New", "Popular", "Trending", "Categories"];

const reviewItem = [
  {
    src: "/challenges/newsHomepage/image-retro-pcs.jpg",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
  },
  {
    src: "/challenges/newsHomepage/image-top-laptops.jpg",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
  },
  {
    src: "/challenges/newsHomepage/image-gaming-growth.jpg",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
  },
];

export default function NewsHomepage() {
  const [toggleMenu, setToggleMenu] = useState(false);
  function handleClick() {
    setToggleMenu((prev) => !prev);
  }
  return (
    <BasePage
      title="Frontend Mentor | News homepage"
      className="flex w-full max-w-5xl flex-col items-center px-2"
    >
      {toggleMenu && (
        <>
          <div className="absolute right-0 z-30 h-full w-4/6 bg-gray-500">
            <div className="flex flex-col items-end">
              <button
                className="my-4 mx-6 rounded-xl py-2 px-2 hover:bg-gray-800"
                onClick={handleClick}
              >
                <AiOutlineMenu size={30} />
              </button>
            </div>
            <div className="">
              <div className="flex flex-col">
                {menuItem.map((item, index) => (
                  <button key={index} className="p-2">
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className=" absolute h-full w-full bg-black/50"></div>
        </>
      )}
      <div className="flex w-full items-center justify-between p-4">
        <div className="text-4xl font-bold ">w.</div>
        <div className="sm:hidden">
          <button
            className="rounded-xl p-2 hover:bg-gray-500"
            onClick={handleClick}
          >
            <AiOutlineMenu size={30} />
          </button>
        </div>
        <div className="hidden sm:flex">
          {menuItem.map((item, index) => (
            <button key={index} className="p-2">
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="flex flex-col items-center gap-2 ">
          <div className=" sm:hidden">
            <Image
              alt="image_1"
              src="/challenges/newsHomepage/image-web-3-mobile.jpg"
              width={686}
              height={600}
            />
          </div>
          <div className=" hidden sm:block">
            <Image
              alt="image_1"
              src="/challenges/newsHomepage/image-web-3-desktop.jpg"
              width={686}
              height={600}
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-center ">
            <div className="flex basis-1/2 p-4 text-5xl font-bold">
              The Bright Future of Web 3.0?
            </div>
            <div className="flex basis-1/2 flex-col px-6">
              <div className="text-sm">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </div>
              <div className="my-2">
                <button className="my-2  bg-orange-700 p-3 px-5 tracking-wider">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="m-2 bg-gray-500 p-6">
          <div className="py-4 text-4xl font-bold">New</div>
          <div className=" flex flex-col gap-6 divide-y-2 ">
            <div>
              <div>Hydrogen VS Electric Cars</div>
              <div>Will hydrogen-fueled cars ever catch up to EVs?</div>
            </div>
            <div className="pt-2">
              <div>The Downsides of AI Artistry</div>
              <div>
                What are the possible adverse effects of on-demand AI image
                generation?
              </div>
            </div>
            <div className="pt-2">
              <div>Is VC Funding Drying Up?</div>
              <div>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6 flex flex-col gap-2 sm:flex-row">
        {reviewItem.map((item, index) => (
          <div key={index} className="flex">
            <div className="flex basis-1/5 sm:basis-2/5">
              <Image alt={item.title} src={item.src} width={200} height={264} />
            </div>
            <div className="flex basis-4/5 flex-col px-4 py-1 sm:basis-3/5 ">
              <div className="text-2xl tracking-wider">
                {"0" + (index + 1).toString()}
              </div>
              <div className="text-lg font-bold">{item.title}</div>
              <div className=" text-sm">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </BasePage>
  );
}
