import { WorkGrid } from "@/components/indexPage";
import type { Work } from "@/components/indexPage";
import { BasePage, BaseFooter } from "@/components/utils";

const works: Work[] = [
  {
    title: "To-do List",
    description: "A to-do list with local and login with remote control",
    href: "/projects/list",
  },
];

const challenges: Work[] = [
  {
    title: "Qr-code",
    description: "this is the Qr-code challenge from Frontend Mentor",
    href: "/challenges/qrCode",
  },
  {
    title: "Results summary",
    description: "this is the Results summary challenge from Frontend Mentor",
    href: "/challenges/resultsSummary",
  },
  {
    title: "Product preview",
    description: "this is the Product preview challenge from Frontend Mentor",
    href: "/challenges/productPreview",
  },
  {
    title: "News homepage",
    description: "this is the News homepage challenge from Frontend Mentor",
    href: "/challenges/newsHomepage",
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
      <div className="m-4 text-center">
        <h3 className="text-base sm:text-xl">
          Take a look at Solved challenges
        </h3>
      </div>
      <WorkGrid work={challenges} />
      <BaseFooter isHome={true} />
    </BasePage>
  );
}
