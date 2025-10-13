import { FC, ButtonHTMLAttributes } from 'react';

interface AuthenticationMainContainerProps extends ButtonHTMLAttributes<HTMLDivElement> {}
const AuthenticationMainContainer: FC<AuthenticationMainContainerProps> = ({ children }) => {
  return (
    <div id="guest-main-container">
      {children}
    </div>
  );
};

export default AuthenticationMainContainer;