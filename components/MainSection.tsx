//Components
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

export default function MainSection () {
    return (
      <main className="max-w-[120rem] w-full flex flex-col">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
    );
}