import "./navbar.style.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>F.A. – Admin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search-icon" className="icon" />
        <img src="/app.svg" alt="app-icon" className="icon" />
        <img src="/expand.svg" alt="expand-icon" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="notifications-icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/monkey.jpg" alt="user-image" />
          <span>Donnie</span>
        </div>
        <div className="icon"></div>
        <img src="/settings.svg" alt="settings-icon" className="icon" />
      </div>
    </div>
  );
};
