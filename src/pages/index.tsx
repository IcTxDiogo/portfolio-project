import Main from "../components/index/main";
import BaseFooter from "../components/utils/baseFooter";
import BasePage from "../components/utils/basePage";

export default function Home() {
  return (
    <>
      <BasePage>
        <Main />
        <BaseFooter />
      </BasePage>
    </>
  );
}
