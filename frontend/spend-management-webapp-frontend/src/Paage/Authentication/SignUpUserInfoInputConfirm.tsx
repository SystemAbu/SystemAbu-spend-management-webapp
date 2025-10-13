import AuthenticationBox from "../../component/AuthenticationBox";
import AuthenticationMainContainer from "../../component/AuthenticationMainContainer";
import AuthenticationMediumTextBox from "../../component/textBox/AuthenticationMediumTextBox";
import { useNavigate } from 'react-router-dom';
import AuthenticationSmallButton from "../../component/buttons/AuthenticationSmallButton";
import AuthenticationStepHeader from "../../component/AuthenticationStepHeader";
import AuthenticationContent from "../../component/AuthenticationContent";

const customSummary: React.ReactNode = (
	<>
		以下の内容でアカウントを登録してよろしいですか？
	</>
);

function SignUpUserInfoInputConfirm() {
	const navigate = useNavigate();
	const handleAccountInfoComplete = () => {
		const result = window.confirm("本当にこの内容で登録してよろしいですか？")
		if (result) {
			// TODO: 画面遷移前にアカウント情報をDBに登録する
			navigate("/sign_up/user_info_input_complete");
		}
	};

	const handleGoBack = () => {
		navigate(-1);
	}


	return (
		<AuthenticationMainContainer>
			<AuthenticationBox>
				<AuthenticationStepHeader
					currentStep={2}
					signUpTitle={"アカウント情報"}
					summaryText={customSummary}
				/>
				<AuthenticationContent>
					{/* TODO: 本来なら、入力情報を表示するが、暫定で確認用に値を設定しているため、後ほど対応 */}
					<AuthenticationMediumTextBox
						name={"mailAddress"}
						label={"メールアドレス"}
						type={"email"}
						placeholder={""}
						defaultValue={"hogehoge@gmail.com"}
						disabled={true}
					>
					</AuthenticationMediumTextBox>
					<AuthenticationMediumTextBox
						name={"text"}
						label={"お名前"}
						type={"email"}
						placeholder={""}
						defaultValue={"田中太郎"}
						disabled={true}
					/>
					<AuthenticationMediumTextBox
						name={"birthday"}
						label={"誕生日"}
						type={"text"}
						placeholder={""}
						defaultValue={"20001001"}
						disabled={true}
					/>
					<AuthenticationMediumTextBox
						name={"password"}
						label={"パスワード"}
						type={"password"}
						placeholder={""}
						defaultValue={"●●●●●●●●●"}
						disabled={true}
					/>
					<div style={{display: "flex", justifyContent: "space-between"}}>
						{/* todo 戻るボタンの背景色を考える */}
						<AuthenticationSmallButton onClick={handleGoBack} style={{backgroundColor: "gainsboro", color:"dimgray", width: "30%"}}>
							戻る
						</AuthenticationSmallButton>
						<AuthenticationSmallButton onClick={handleAccountInfoComplete} style={{width: "60%"}}>
							登録
						</AuthenticationSmallButton>
					</div>
				</AuthenticationContent>
			</AuthenticationBox>
		</AuthenticationMainContainer>
	);
}

export default SignUpUserInfoInputConfirm;