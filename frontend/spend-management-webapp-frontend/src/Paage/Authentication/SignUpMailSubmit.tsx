import AuthenticationMediumButton from "../../component/buttons/AuthenticationMediumButton";
import AuthenticationBox from "../../component/AuthenticationBox";
import AuthenticationMainContainer from "../../component/AuthenticationMainContainer";
import AuthenticationMediumTextBox from "../../component/textBox/AuthenticationMediumTextBox";
import { useNavigate } from 'react-router-dom';
import AuthenticationStepHeader from "../../component/AuthenticationStepHeader";
import AuthenticationContent from "../../component/AuthenticationContent";

const customSummary: React.ReactNode = (
	<>
		入力したメールアドレスに<br />
		アカウント作成用のリンクを送信します。
	</>
);

function SignUpMailSubmit() {

	const navigate = useNavigate();
	const handleMailSubmit = () => {
		// TODO: 本来ならば、メールアドレス宛てにリンクを送信するが、暫定的にユーザー情報入力画面に遷移するようにしているため、後ほど対応
		navigate("/sign_up/user_info_input");
	};

	return (
		<AuthenticationMainContainer>
			<AuthenticationBox>
				<AuthenticationStepHeader
					currentStep={0}
					signUpTitle={"アカウント作成"}
					summaryText={customSummary}
				/>
				<AuthenticationContent>
					<AuthenticationMediumTextBox
						name={"mailAddress"}
						label={""}
						type={"email"}
						placeholder={"(例：manemane@example.com)"}
					/>
					<AuthenticationMediumButton onClick={handleMailSubmit}>
						メールを送信
					</AuthenticationMediumButton>
				</AuthenticationContent>
			</AuthenticationBox>
		</AuthenticationMainContainer >
	);
}

export default SignUpMailSubmit;