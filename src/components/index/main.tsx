import type { work } from "../../pages";
import WorkGrid from "./workGrid";

interface MainProps {
  works: work[];
}

export default function Main({ works }: MainProps) {
  return (
    <>
      <div className="mb-4 text-center">
        <h1 className="py-14 text-4xl sm:text-7xl">{`Hi there, i'm Diogo`}</h1>
        <h2 className=" text-xl sm:text-2xl">A Full Stack lover</h2>
        <h3 className="text-base sm:text-xl">
          Take a look at my personal projects
        </h3>
      </div>
      <WorkGrid work={works} />
    </>
  );
}
