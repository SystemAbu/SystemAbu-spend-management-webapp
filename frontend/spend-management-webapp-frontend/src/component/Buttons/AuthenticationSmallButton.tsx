import { FC, ButtonHTMLAttributes } from 'react';
import BaseButton from './BaseButton'
import styles from '../../css/button.module.css';

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const AuthenticationSmallButton: FC<BaseButtonProps> = ({ className, children, ...props }) => {
  return (
    <BaseButton className={styles['authentication-small-button']} {...props}>
      {children}
    </BaseButton>
  );
};

export default AuthenticationSmallButton;