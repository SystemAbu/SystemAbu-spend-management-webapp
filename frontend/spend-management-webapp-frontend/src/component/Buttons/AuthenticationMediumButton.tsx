import { FC, ButtonHTMLAttributes } from 'react';
import BaseButton from './BaseButton'
import styles from '../../css/button.module.css';

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const AuthenticationMediumButton: FC<BaseButtonProps> = ({ className, children, ...props }) => {
  return (
    <BaseButton className={styles['authentication-medium-button']} {...props}>
      {children}
    </BaseButton>
  );
};

export default AuthenticationMediumButton;