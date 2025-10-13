import { FC, ReactNode } from 'react';
import StepBorderSignUp from "./stepBorder/StepBorderSignUp";

interface AuthenticationStepHeaderProps {
  currentStep?: number;
  signUpTitle?: string;
  summaryText?: React.ReactNode;
  children?: ReactNode;
};
const AuthenticationStepHeader: FC<AuthenticationStepHeaderProps> = ({ signUpTitle, children, summaryText, currentStep = 0 }) => {
  return (
    <>
      <h1 className="sign-up-title">{signUpTitle}</h1>
      <StepBorderSignUp currentStep={currentStep} />
      <p className="sign-summary-text">
        {summaryText ?? (
          <>
          </>
        )}
      </p>
      {children}
    </>
  );
};

export default AuthenticationStepHeader;