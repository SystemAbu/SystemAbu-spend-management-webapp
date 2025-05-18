import { FC, ButtonHTMLAttributes } from "react";
import classNames from 'classnames';
import styles from '../../css/button.module.css';


interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const BaseButton: FC<BaseButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={classNames(styles['button'] , className)} {...props}>
      {children}
    </button>
  );
};

export default BaseButton;