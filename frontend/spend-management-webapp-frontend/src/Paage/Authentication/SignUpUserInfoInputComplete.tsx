import AuthenticationMediumButton from "../../component/buttons/AuthenticationMediumButton";
import AuthenticationBox from "../../component/AuthenticationBox";
import AuthenticationMainContainer from "../../component/AuthenticationMainContainer";
import { useNavigate } from 'react-router-dom';
import AuthenticationStepHeader from "../../component/AuthenticationStepHeader";
import AuthenticationContent from "../../component/AuthenticationContent";

const customSummary: React.ReactNode = (
	<>
		アカウントの登録が完了しました。<br />
		ログイン画面からログインしてください。
	</>
);

function SignUpUserInfoInputComplete() {
	const navigate = useNavigate();
	const handleGoToLogin = () => {
		// TODO: ログイン画面ができ次第、画面遷移処理を実施
		navigate("/login");
	};

	return (
		<AuthenticationMainContainer>
			<AuthenticationBox>
				<AuthenticationStepHeader
					currentStep={3}
					signUpTitle={"アカウント登録完了"}
					summaryText={customSummary}
				/>

				<AuthenticationContent>
					<AuthenticationMediumButton onClick={handleGoToLogin}>
						ログイン画面へ
					</AuthenticationMediumButton>
				</AuthenticationContent>
			</AuthenticationBox>
		</AuthenticationMainContainer>
	);
}

export default SignUpUserInfoInputComplete;