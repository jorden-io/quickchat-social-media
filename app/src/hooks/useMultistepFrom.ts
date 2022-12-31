import { ReactElement, useState } from "react";
export default function useMultistepForm(steps: Array<ReactElement>) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };
  const back = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };
  const goto = (index: number) => {
    setCurrentStepIndex(index);
  };
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    steps,
    goto,
    next,
    back,
  };
}
