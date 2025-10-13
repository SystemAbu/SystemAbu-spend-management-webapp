import { FC, ButtonHTMLAttributes } from 'react';

interface AuthenticationContentProps extends ButtonHTMLAttributes<HTMLDivElement> {} 
const AuthenticationContent: FC<AuthenticationContentProps> = ({children}) => {
  return (
    <div className='authentication-content'>
      {children}
    </div>
  );
};

export default AuthenticationContent;