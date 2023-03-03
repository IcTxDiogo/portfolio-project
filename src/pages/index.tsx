import { Main } from "@/components/indexPage";
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
    <>
      <BasePage title="Portfolio">
        <div className="max-w-4xl">
          <Main works={works} />
          <BaseFooter />
        </div>
      </BasePage>
    </>
  );
}
