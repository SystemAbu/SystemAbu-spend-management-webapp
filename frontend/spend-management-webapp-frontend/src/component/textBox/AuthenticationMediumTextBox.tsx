import React from 'react';
import styles from '../../css/TextBox.module.css';
import BaseTextBoxWithLabel from './TextBoxBase';

type BaseTextBoxWithLabelProps = {
  label: string;
  name: string;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string;
};

const AuthenticationMediumTextBox: React.FC<BaseTextBoxWithLabelProps> = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  defaultValue = '',
  disabled
}) => {
  return (
    <BaseTextBoxWithLabel
      label={label}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      type={type}
      className={styles["authentication-medium-textBox"]}
      disabled={disabled}
    />
  );
};

export default AuthenticationMediumTextBox;