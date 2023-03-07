import { BsLightningCharge, BsChatText, BsEye } from "react-icons/bs";
import { BiBrain } from "react-icons/bi";

import { BasePage } from "@/components/utils";

const items = [
  {
    icon: <BsLightningCharge />,
    title: "Reaction",
    titleColor: "text-red-400",
    bgColor: "bg-red-300/30",
    value: 80,
  },
  {
    icon: <BiBrain />,
    title: "Memory",
    titleColor: "text-yellow-400",
    bgColor: "bg-yellow-300/30",
    value: 92,
  },
  {
    icon: <BsChatText />,
    title: "Verbal",
    titleColor: "text-emerald-400",
    bgColor: "bg-emerald-300/30",
    value: 61,
  },
  {
    icon: <BsEye />,
    title: "Visual",
    titleColor: "text-blue-400",
    bgColor: "bg-blue-300/30",
    value: 72,
  },
];

export default function ResultsSummary() {
  return (
    <BasePage
      title="Frontend Mentor | Results summary component"
      className="sm:flex sm:max-w-xl sm:items-center sm:justify-center"
    >
      <div className="flex h-96 basis-2/4 flex-col items-center gap-4 rounded-b-3xl bg-gradient-to-b from-violet-600 via-indigo-600 to-blue-800  p-8 sm:rounded-3xl">
        <h2 className="text-xl">Your Result</h2>
        <div className="flex flex-col items-center rounded-full bg-gradient-to-b from-blue-800 py-8 px-9">
          <h3 className="text-5xl">76</h3>
          <div className=" text-sm">of 100</div>
        </div>
        <h3 className="text-2xl">Great</h3>
        <p className="text-center text-xs">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className=" basis-2/4 p-6 shadow sm:rounded-r-3xl">
        <h2 className="">Summary</h2>
        <div className="flex flex-col gap-4 px-2 py-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between ${item.bgColor} rounded-xl p-2`}
            >
              <div className={`flex items-center gap-2 ${item.titleColor}`}>
                {item.icon}
                <h2>{item.title}</h2>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-lg ">{item.value}</p>
                <p className="text-gray-400">/ 100</p>
              </div>
            </div>
          ))}

          <button className="rounded-3xl bg-gray-700  p-4 hover:bg-gradient-to-r hover:from-violet-600 hover:via-indigo-600 hover:to-blue-800">
            Continue
          </button>
        </div>
      </div>
    </BasePage>
  );
}
