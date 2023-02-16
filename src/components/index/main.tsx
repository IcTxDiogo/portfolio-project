import WorkGrid from "./workGrid";

export interface work {
  id: number;
  title: string;
  description: string;
  href: string;
}

const works: work[] = [
  {
    id: 1,
    title: "To-do List",
    description: "A to-do list with local and login with remote control",
    href: "/",
  },
];

export default function Main() {
  return (
    <>
      <div>
        <h1 className="py-14 text-7xl">{`Hi there, i'm Diogo`}</h1>
        <h2 className="text-2xl">A Full Stack lover</h2>
        <h3>Take a look at my personal projects</h3>
        <WorkGrid work={works} />
      </div>
    </>
  );
}
