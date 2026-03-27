//Components
import SectionOne from "./SectionOne";

export default function MainSection () {
    return (
      <main className="max-w-[120rem] w-full flex flex-col bg-[url(/images/bg-one.png)] bg-bottom bg-no-repeat bg-contain">
        <SectionOne />
      </main>
    );
}