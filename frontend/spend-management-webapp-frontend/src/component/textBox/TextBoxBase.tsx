import React from 'react';
import styles from '../../css/TextBox.module.css';

type BaseTextBoxWithLabelProps = {
  label: string;
  name: string;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  defaultValue?: string;
  className?: string;
};

const TextBoxWithLabelBase: React.FC<BaseTextBoxWithLabelProps> = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  disabled = false,
  defaultValue = '',
  className = '',
}) => {
  return (
    <div className={styles["input-wrapper"]}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        readOnly={disabled}
        className={`${styles.input} ${className}`}
      />
    </div>
  );
};

export default TextBoxWithLabelBase;