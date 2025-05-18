function GuestHeader() {
  return (
    <>
      <header className="guest-header">
        <span>
          <img className="app-logo-icon" src="../public/app-icon.png"></img>
        </span>
        <a className="make-account-link" href="">
          アカウント作成
        </a>
      </header>
    </>
  );
}

export default GuestHeader;