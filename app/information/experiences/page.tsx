import Stepper from "../_components/stepper";
import ExpAccordion from "./_sections/exp-accordion";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 max-w-screen-md mx-auto w-full mt-16">
      <Stepper />

      <div className="flex flex-col gap-8">
        <ExpAccordion />
      </div>
    </div>
  );
}
