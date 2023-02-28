import Main from "../components/index/main";
import BaseFooter from "../components/utils/baseFooter";
import BasePage from "../components/utils/basePage";

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
    href: "/list",
  },
];

export default function Home() {
  return (
    <>
      <BasePage title="Portfolio">
        <div>
          <Main works={works} />
          <BaseFooter />
        </div>
      </BasePage>
    </>
  );
}
