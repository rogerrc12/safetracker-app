export interface IStepperProps {
  steps: Steps[];
  currentStep: number;
}

type Steps = {
  label: string;
  value: number;
};
