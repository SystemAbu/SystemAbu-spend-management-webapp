import AuthenticationMediumButton from "../../component/buttons/AuthenticationMediumButton";
import AuthenticationBox from "../../component/AuthenticationBox";
import AuthenticationMainContainer from "../../component/AuthenticationMainContainer";
import AuthenticationMediumTextBox from "../../component/textBox/AuthenticationMediumTextBox";
import { useNavigate } from 'react-router-dom';
import AuthenticationStepHeader from "../../component/AuthenticationStepHeader";
import AuthenticationContent from "../../component/AuthenticationContent";

const customSummary: React.ReactNode = (
	<>
		アカウントに登録する情報を入力してください。
	</>
);

function SignUpUserInfoInput() {

	const navigate = useNavigate();
	const handleGoToAccountInfoConfirm = () => {
		navigate("/sign_up/user_info_input_confirm");
	};

	return (
		<AuthenticationMainContainer>
			<AuthenticationBox>
				<AuthenticationStepHeader currentStep={1}
					signUpTitle={"アカウント情報"}
					summaryText={customSummary}
				/>

				<AuthenticationContent>
					<AuthenticationMediumTextBox
						name={"mailAddress"}
						label={"メールアドレス"}
						type={"email"}
						placeholder={"(例：manemane@example.com)"}
					/>
					<AuthenticationMediumTextBox
						name={"text"}
						label={"お名前"}
						type={"email"}
						placeholder={"(例：田中太郎)"}
					/>
					<AuthenticationMediumTextBox
						name={"birthday"}
						label={"誕生日"}
						type={"text"}
						placeholder={"(例：20000101)"}
					/>
					<AuthenticationMediumTextBox
						name={"password"}
						label={"パスワード"}
						type={"password"}
						placeholder={"半角英数字記号8~16文字"}
					/>

					<AuthenticationMediumButton onClick={handleGoToAccountInfoConfirm}>
						確認画面へ
					</AuthenticationMediumButton>
				</AuthenticationContent>
			</AuthenticationBox>
		</AuthenticationMainContainer>
	);
}

export default SignUpUserInfoInput;