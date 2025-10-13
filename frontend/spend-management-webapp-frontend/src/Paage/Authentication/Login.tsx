import AuthenticationMediumButton from "../../component/buttons/AuthenticationMediumButton";
import AuthenticationBox from "../../component/AuthenticationBox";
import AuthenticationMainContainer from "../../component/AuthenticationMainContainer";
import AuthenticationMediumTextBox from "../../component/textBox/AuthenticationMediumTextBox";
import AuthenticationContent from "../../component/AuthenticationContent";

function Login() {
  return (
    <AuthenticationMainContainer>
      <img src="../public/app-icon.png" style={{ width: "10%", display: "block", margin: "40px auto 10px" }}></img>
      <AuthenticationBox style={{ width: "30%", marginTop: "30px",  marginBottom: 0 }}>
        <AuthenticationContent>
          <h1 style={{ display: "block", fontSize: "2.5rem", margin: "40px auto 30px", textAlign: "center" }}>ログイン</h1>
          <AuthenticationMediumTextBox
            name={"accountMailAddress"}
            label={"メールアドレス"}
            type={"email"}
            placeholder={"(例：manemane@example.com)"}
          />
          <AuthenticationMediumTextBox
            name={"accountPassword"}
            label={"パスワード"}
            type={"password"}
            placeholder={"半角英数字記号8~16文字"}
          />
          <AuthenticationMediumButton>
            ログイン
          </AuthenticationMediumButton>
          <div style={{ display: "flex", justifyContent: "right" }}>
            {/* パスワード再設定画面を作成でき次第、画面遷移するようにする (現状トップ画面に遷移)*/}
            <a className="link" href="/" style={{marginTop: "15px", fontSize: "1.25rem"}}>
              パスワードを忘れた方
            </a>
          </div>
        </AuthenticationContent>
      </AuthenticationBox>
    </AuthenticationMainContainer >
  );
}

export default Login;