import { FC } from 'react';
import StepBorderBase from './StepBorderBase';

const stepTextArray = [
  "メール送信<br>&nbsp;", 
  "アカウント情報<br>入力", 
  "アカウント情報<br>確認", 
  "完了<br>&nbsp;"
];

interface StepBorderSignUpProps {
  currentStep?: number;
};
const StepBorderSignUp: FC<StepBorderSignUpProps> = ({ currentStep = 0 }) => {
  return (
    <StepBorderBase currentStep={currentStep} steps={stepTextArray} />
  );
};

export default StepBorderSignUp;