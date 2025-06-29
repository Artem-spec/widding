import { MainInfo } from "./mainInfo";
import { About } from "./about";
import { Schedule } from "./schedule";
import { DressCode } from "./dressCode";
import { Additional } from "./additional";
import { Feedback } from "./feedback";

export const App = () => {
  return (
    <>
      <header>
        <MainInfo />
      </header>
      <main>
        <About />
        <Schedule />
        <DressCode />
        <Additional />
        <Feedback />
      </main>
    </>
  );
};
