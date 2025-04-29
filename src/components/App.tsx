import { MainInfo } from "./mainInfo";
import { About } from "./about";
import { Schedule } from "./schedule";
import { DressCode } from "./dressCode";
// import { Guests } from "./guests";
import { Additional } from "./additional";
// import { Feedback } from "./feedback";

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
        {/* <Guests /> */}
        <Additional />
        {/* <Feedback /> */}
      </main>
    </>
  );
};
