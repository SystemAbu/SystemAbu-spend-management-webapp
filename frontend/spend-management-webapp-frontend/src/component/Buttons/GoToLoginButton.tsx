import { FC, ButtonHTMLAttributes } from 'react';
import BaseButton from './BaseButton'

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const GoToLoginButton: FC<BaseButtonProps> = ({ className, children, ...props }) => {
  return (
    <BaseButton {...props}>
      {children ?? "ログイン画面へ"}
    </BaseButton>
  );
};

export default GoToLoginButton;