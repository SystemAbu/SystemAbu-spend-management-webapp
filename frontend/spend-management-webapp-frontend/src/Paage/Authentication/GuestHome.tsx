import GoToLoginButton from '../../component/buttons/GoToLoginButton';
import { useNavigate } from 'react-router-dom';

const styleObject = {
  height: "calc(100vh - var(--header-height))",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};


function GuestHome() {
	const navigate = useNavigate();
	const handleGoToLogin = () => {
		navigate("/Login");
	};
	return (
		<div style={styleObject}>
			<GoToLoginButton onClick={handleGoToLogin}></GoToLoginButton>
		</div>
	);
}

export default GuestHome;