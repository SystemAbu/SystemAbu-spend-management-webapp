import React from 'react';
import styles from '../../css/StepBorder.module.css';

type BaseStepBarProps = {
  steps: string[];
  currentStep: number; // 0-based index
};

const StepBorderBase: React.FC<BaseStepBarProps> = ({ steps, currentStep }) => {
  return (
    <div className={styles["step-bar"]}>
      {steps.map((label, index) => {
        const classList = [styles.step];
        if (index === currentStep) classList.push(styles["active"]);
        else if (index < currentStep) classList.push(styles["done"]);
        else classList.push(styles["future"]);
        console.log(classList)
        return (
          <div className={classList.join(' ')} key={index}>
            <span dangerouslySetInnerHTML={{__html: label}}/>
          </div>
        );
      })}
    </div>
  );
};

export default StepBorderBase;
