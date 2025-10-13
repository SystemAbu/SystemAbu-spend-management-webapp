import { FC, ButtonHTMLAttributes } from 'react';

interface AuthenticationBoxProps extends ButtonHTMLAttributes<HTMLDivElement> {} 
const AuthenticationBox: FC<AuthenticationBoxProps> = ({children, ...props}) => {
  return (
    <div className='authentication-box' {...props}>
      {children}
    </div>
  );
};

export default AuthenticationBox;