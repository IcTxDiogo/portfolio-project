import { WorkGrid } from "@/components/indexPage";
import type { Work } from "@/components/indexPage";
import { BasePage, BaseFooter } from "@/components/utils";

const works: Work[] = [
  {
    id: 1,
    title: "To-do List",
    description: "A to-do list with local and login with remote control",
    href: "/projects/list",
  },
];

export default function Home() {
  return (
    <BasePage title="Portfolio" className="max-w-4xl us:w-3/4">
      <div className="mb-4 text-center">
        <h1 className="py-14 text-4xl sm:text-7xl">{`Hi there, i'm Diogo`}</h1>
        <h2 className="text-xl sm:text-2xl">A Full Stack lover</h2>
        <h3 className="text-base sm:text-xl">
          Take a look at my personal projects
        </h3>
      </div>
      <WorkGrid work={works} />
      <BaseFooter isHome={true} />
    </BasePage>
  );
}
