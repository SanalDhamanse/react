import logo from "./GloboLogo.png";

const Header = (props) => {
  const { subtitle } = props;

  return (
    <header className="row">
      <div className=" col-md-5">
        <img src={logo} className="logo" alt="logo"></img>
      </div>
      <div className="col-md-7 mt-5 subtitle">{subtitle}</div>
    </header>
  );
};

export default Header;
