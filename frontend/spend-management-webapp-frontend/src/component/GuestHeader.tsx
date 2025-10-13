import { useNavigate } from 'react-router-dom';

function GuestHeader() {
  const navigate = useNavigate();
	const handleGoToTop = () => {
		navigate("/");
	};

  return (
    <>
      <header className="guest-header">
        <span>
          <img className="app-logo-icon" src="../public/app-icon.png" onClick={handleGoToTop}></img>
        </span>
        {/* todo トップ画面の時だけ表示されるように対応する */}
        <a className="link make-account-link" href="/sign_up">
          アカウント作成
        </a>
      </header>
    </>
  );
}

export default GuestHeader;